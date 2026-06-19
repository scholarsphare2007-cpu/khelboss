self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('khelboss-store').then((cache) => {
      // Abhi testing ke liye sirf main index.html file ko cache karte hain
      // Taaki path error na aaye aur PWA install ho jaye
      return cache.addAll([
        './', 
        'index.html'
      ]).catch(err => console.log("Cache error bhaiya: ", err));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});