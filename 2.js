var cacheName = 'javascript';
caches.open(cacheName).then( (cache) => { 
  cache.keys().then( (req) => { 
      console.log(req);
        localStorage.setItem('Cache data', req);
  });
});
