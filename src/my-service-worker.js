// ngsw-worker.js
const USER_IMAGES_CACHE = 'user-images-cache';
const OTHER_CACHE = 'other-cache';

// Custom cache-first strategy
self.addEventListener('fetch', event => {

  //if the request url does not start with http then return
  if (!event.request.url.startsWith('http')) return;

  //if the request is not a GET request then return
  if (event.request.method !== 'GET') return;

  // Check if the request URL starts with USER_IMAGES_URL
  const USER_IMAGES_URL = `https://d3bxgelzcyt5r7.cloudfront.net/public/USERS/`;
  if (event.request.url.startsWith(USER_IMAGES_URL)) {
    event.respondWith(
      caches.open(USER_IMAGES_CACHE).then(cache => {
        
        setTimeout(async () => {
          console.log(await cache.match(event.request));
        })

        return cache.match(event.request).then(cachedResponse => {      
          return cachedResponse || fetch(event.request).then(networkResponse => {
            // Cache the fetched response
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    // For any other urls
    event.respondWith(
      caches.open(OTHER_CACHE).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          return cachedResponse || fetch(event.request).then(networkResponse => {
            // Cache the fetched response
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});

// Cache expiration handling
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          return caches.delete(cacheName)
        })
      );
    })
  );
});

// Custom notification handling
self.addEventListener('message', async (event) => {
  console.log('message', event);

  //USER IMAGE CACHE HANDLING
  if (event.data.action === 'USER_IMAGE_UPDATED') {
    
    const cache = await caches.open(USER_IMAGES_CACHE);
    const keys = await cache.keys();
    const request = keys.find(key => key.url === event.data.url);
    if (request) {
  
      // Update the cache with the new Response created from the blob
      await cache.put(request, new Response(event.data.blob, { url: event.data.url }));
    }
  }
});