/* Dark mode: applies saved/OS theme immediately, then adds a toggle button to the nav. */
(function(){
  var root = document.documentElement;
  function saved(){ try { return localStorage.getItem("tufr-theme"); } catch(e){ return null; } }
  function systemDark(){ return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches; }
  function apply(t){ root.setAttribute("data-theme", t); }
  apply(saved() || (systemDark() ? "dark" : "light"));

  var SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  document.addEventListener("DOMContentLoaded", function(){
    var inner = document.querySelector(".nav-inner"); if(!inner) return;
    var btn = document.createElement("button");
    btn.className = "theme-toggle"; btn.type = "button";
    function sync(){
      var dark = root.getAttribute("data-theme") === "dark";
      btn.innerHTML = dark ? SUN : MOON;
      btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      btn.title = btn.getAttribute("aria-label");
    }
    btn.addEventListener("click", function(){
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next); try { localStorage.setItem("tufr-theme", next); } catch(e){}
      sync();
    });
    sync(); inner.appendChild(btn);
  });
})();
