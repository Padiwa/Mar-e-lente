// Marée lente : fonctionne hors ligne.
// Changer VERSION à chaque mise à jour des fichiers pour forcer le rafraîchissement du cache.
const VERSION = "maree-lente-v1";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/shortcut-96.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Pages : le cache d'abord (lancement instantané, même sans réseau), en ignorant ?mode=…
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html").then((hit) => hit || fetch(req))
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Polices Google : mises en cache au premier chargement, puis servies hors ligne
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(VERSION).then((c) =>
        c.match(req).then((hit) => {
          const net = fetch(req).then((res) => { c.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        })
      )
    );
    return;
  }

  // Fichiers de l'application : cache d'abord, réseau en secours
  if (url.origin === self.location.origin) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req)));
  }
});
