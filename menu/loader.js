(function() {
  // 1. Load Menu CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './menu/menu.css';
  document.head.appendChild(link);

  // 2. Load Menu JS Logic (Which injects HTML directly)
  const script = document.createElement('script');
  script.src = './menu/menu.js';
  document.body.appendChild(script);
})();
