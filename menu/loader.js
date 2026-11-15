// Menu Loader Script for Vendor v9 Fix Index
(function() {
  // 1. Load Menu CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './menu/menu.css';
  document.head.appendChild(link);

  // 2. Fetch and Inject Menu HTML into Body
  fetch('./menu/menu.html')
    .then(res => res.text())
    .then(html => {
      const container = document.createElement('div');
      container.innerHTML = html;
      document.body.appendChild(container.firstElementChild);
    })
    .catch(err => console.log('Menu HTML load error:', err));

  // 3. Load Menu JS Logic
  const script = document.createElement('script');
  script.src = './menu/menu.js';
  document.body.appendChild(script);
})();