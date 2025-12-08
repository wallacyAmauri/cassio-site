import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

// Handle GitHub Pages 404.html redirect
// This converts the query string back to a normal path
if (window.location.search.includes('?/')) {
  const basePath = import.meta.env.BASE_URL || '/';
  const queryString = window.location.search.slice(2); // Remove '?/'
  const path = queryString.split('&')[0].replace(/~and~/g, '&');
  const search = queryString.split('&').slice(1).join('&').replace(/~and~/g, '&');
  const hash = window.location.hash;
  
  const newPath = basePath + path + (search ? '?' + search : '') + hash;
  window.history.replaceState(null, '', newPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
) 