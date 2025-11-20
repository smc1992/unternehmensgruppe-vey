// Coolify Debug Script
// Add this to index.html to debug deployment issues

(function() {
  console.log('=== COOLIFY DEBUG INFO ===');
  console.log('URL:', window.location.href);
  console.log('Path:', window.location.pathname);
  console.log('Origin:', window.location.origin);
  console.log('User Agent:', navigator.userAgent);
  
  // Check if assets are loading
  const checkAsset = (url) => {
    return fetch(url, { method: 'HEAD' })
      .then(response => {
        console.log(`✅ ${url}: ${response.status}`);
        return response.ok;
      })
      .catch(error => {
        console.error(`❌ ${url}: ${error.message}`);
        return false;
      });
  };
  
  // Check critical assets
  const assets = [
    '/assets/index-TjXRht_U.js',
    '/assets/index-mXrXT9q6.css',
    '/fonts/fonts.css'
  ];
  
  Promise.all(assets.map(checkAsset)).then(results => {
    const failed = results.filter(r => !r).length;
    if (failed > 0) {
      console.error(`❌ ${failed} assets failed to load`);
      document.body.innerHTML += `
        <div style="position:fixed;top:10px;right:10px;background:red;color:white;padding:10px;z-index:9999;">
          ${failed} assets failed to load - check console
        </div>
      `;
    } else {
      console.log('✅ All assets loaded successfully');
    }
  });
  
  // Check for React errors
  window.addEventListener('error', function(e) {
    console.error('❌ JavaScript Error:', e.error);
  });
  
  window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ Unhandled Promise Rejection:', e.reason);
  });
})();
