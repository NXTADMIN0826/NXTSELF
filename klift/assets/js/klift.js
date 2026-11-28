/* KLIFT site interactions — vanilla JS, no dependencies */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.remove("no-js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Header state on scroll */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile menu */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector(".mobile-menu");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    if (menu) menu.setAttribute("aria-hidden", String(!open));
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); toggle.focus(); }
    });
    if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  }

  /* Reveal on scroll */
  var revealEls = document.querySelectorAll(".reveal, .split-reveal, .feature-media, .journey, .chart-card, [data-count]");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        if (entry.target.hasAttribute("data-count")) countUp(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* Hero headline lines animate immediately */
  requestAnimationFrame(function () {
    document.querySelectorAll(".hero .split-reveal, .page-hero .split-reveal").forEach(function (el) { el.classList.add("in"); });
  });

  /* Count-up numbers */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var fmt = function (n) { return Math.round(n).toLocaleString("en-US"); };
    var start = null, dur = 1600;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* Subtle parallax on hero pattern + vial */
  var parallax = document.querySelectorAll("[data-parallax]");
  if (parallax.length && !reduce) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        parallax.forEach(function (el) {
          var speed = parseFloat(el.getAttribute("data-parallax")) || 0.2;
          el.style.transform = "translate3d(0," + (y * speed).toFixed(1) + "px,0)";
        });
        ticking = false;
      });
    }, { passive: true });
  }

  /* Ingredient filters (science page) */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".ingredient");
  var countEl = document.querySelector("[data-filter-count]");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var f = btn.getAttribute("data-filter");
      filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b === btn)); });
      var shown = 0;
      cards.forEach(function (card) {
        var match = f === "all" || (card.getAttribute("data-pillar") || "").split(" ").indexOf(f) !== -1;
        card.classList.toggle("is-hidden", !match);
        if (match) { shown++; card.classList.add("in"); }
      });
      if (countEl) countEl.textContent = "Showing " + shown + " of " + cards.length + " actives";
    });
  });

  /* Contact form → opens a pre-filled email (static site, no backend) */
  var form = document.querySelector("[data-mailto-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var data = new FormData(form);
      var subject = "KLIFT enquiry — " + (data.get("role") || "General");
      var body = [
        "Name: " + data.get("name"),
        "Email: " + data.get("email"),
        "Clinic / company: " + (data.get("clinic") || "—"),
        "Country: " + (data.get("country") || "—"),
        "I am a: " + (data.get("role") || "—"),
        "",
        data.get("message") || ""
      ].join("\n");
      window.location.href = "mailto:" + form.getAttribute("data-mailto-form") +
        "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      if (status) status.textContent = "Opening your email app with your message ready to send…";
    });
  }

  /* Current year */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
