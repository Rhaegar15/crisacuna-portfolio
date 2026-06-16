/* Cristián Acuña — Portfolio interactions */
(function () {
  "use strict";

  /* ---- nav: scrolled border + mobile menu ---- */
  var nav = document.getElementById("nav");
  var burger = document.getElementById("burger");
  var navlinks = document.getElementById("navlinks");
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });
  burger.addEventListener("click", function () {
    navlinks.classList.toggle("open");
  });
  navlinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") navlinks.classList.remove("open");
  });

  /* ---- active section highlight ---- */
  var sections = ["home", "about", "work", "system", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navAnchors = Array.prototype.slice.call(
    navlinks.querySelectorAll('a:not(.nav-cta)')
  );
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        var id = en.target.id;
        navAnchors.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  sections.forEach(function (s) { spy.observe(s); });

  /* ---- marquee: duplicate track for seamless loop ---- */
  var mq = document.getElementById("marquee");
  if (mq) { mq.innerHTML += mq.innerHTML; }

  /* ---- reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  var ro = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        ro.unobserve(en.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  reveals.forEach(function (el) { ro.observe(el); });

  /* ---- "what's in your mind" chips ---- */
  var mind = document.getElementById("mind");
  if (mind) {
    mind.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
    });
  }

  /* ---- CV button (placeholder) ---- */
  var cv = document.getElementById("cv-btn");
  if (cv) {
    cv.addEventListener("click", function (e) {
      e.preventDefault();
      var old = cv.textContent;
      cv.textContent = "CV disponible pronto";
      cv.style.opacity = ".65";
      setTimeout(function () { cv.textContent = old; cv.style.opacity = ""; }, 1900);
    });
  }

  /* ---- contact form validation ---- */
  var form = document.getElementById("cform");
  if (form) {
    var nameI = document.getElementById("name");
    var emailI = document.getElementById("email");
    var msgI = document.getElementById("message");
    var success = document.getElementById("form-success");

    function setInvalid(fieldId, bad) {
      document.getElementById(fieldId).classList.toggle("invalid", bad);
    }
    function emailOk(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    [["name", nameI], ["email", emailI], ["message", msgI]].forEach(function (pair) {
      pair[1].addEventListener("input", function () {
        var el = document.getElementById("f-" + (pair[0] === "message" ? "msg" : pair[0]));
        if (el.classList.contains("invalid")) el.classList.remove("invalid");
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = false;
      if (!nameI.value.trim()) { setInvalid("f-name", true); bad = true; }
      if (!emailOk(emailI.value.trim())) { setInvalid("f-email", true); bad = true; }
      if (msgI.value.trim().length < 4) { setInvalid("f-msg", true); bad = true; }
      if (bad) {
        var firstBad = form.querySelector(".invalid input, .invalid textarea");
        if (firstBad) firstBad.focus();
        return;
      }
      document.getElementById("success-name").textContent =
        nameI.value.trim().split(" ")[0] + ", Cristián";
      form.style.display = "none";
      success.classList.add("show");
    });
  }
})();
