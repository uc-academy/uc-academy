// Urban Company Academy - minimal service worker
// Registered from a real file path (not a blob: URL) so browsers correctly
// recognize this as satisfying PWA installability criteria.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => {
  // Pass-through: this app always fetches fresh content from the network.
  // A fetch handler must exist for installability, even if it does nothing extra.
});
