// Ezhunai Website Client Interactions
(() => {
  "use strict";

  // DOM Elements
  const header = document.querySelector("header");
  const menuBtn = document.querySelector(".menu");
  const nav = document.querySelector("nav");
  const yearEl = document.querySelector("#year");

  // 1. Copyright Year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Sticky Header Elevation on Scroll
  if (header) {
    let ticking = false;
    const updateHeader = () => {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateHeader);
          ticking = true;
        }
      },
      { passive: true },
    );
    updateHeader();
  }

  // 3. Accessible Mobile Navigation
  if (menuBtn && nav) {
    const toggleNav = (open) => {
      const isOpen =
        typeof open === "boolean"
          ? open
          : menuBtn.getAttribute("aria-expanded") !== "true";
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation",
      );
      nav.classList.toggle("open", isOpen);
    };

    menuBtn.addEventListener("click", () => toggleNav());

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleNav(false));
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menuBtn.getAttribute("aria-expanded") === "true"
      ) {
        toggleNav(false);
        menuBtn.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (header && !header.contains(event.target)) {
        toggleNav(false);
      }
    });

    window
      .matchMedia("(min-width: 821px)")
      .addEventListener("change", (event) => {
        if (event.matches) toggleNav(false);
      });
  }

  // 4. Active Section Highlighting
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              const match = link.getAttribute("href") === `#${id}`;
              link.classList.toggle("active", match);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // 5. Staggered Core Belief Reveal
  const beliefFlow = document.querySelector(".belief-flow");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  if (
    beliefFlow &&
    "IntersectionObserver" in window &&
    !prefersReducedMotion.matches
  ) {
    beliefFlow.classList.add("reveal-ready");
    const beliefObserver = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          beliefFlow.classList.add("is-revealed");
          beliefObserver.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    beliefObserver.observe(beliefFlow);
  }

  // 6. Seamless Infinite Card Rails with Touch & Reduced-Motion Handling
  document.querySelectorAll(".card-rail").forEach((rail) => {
    const track = rail.querySelector(".card-track");
    if (!track || !track.firstElementChild) return;

    // Duplicate track content once for continuous CSS translation
    const duplicate = track.firstElementChild.cloneNode(true);
    duplicate.classList.add("card-duplicate");
    duplicate.setAttribute("aria-hidden", "true");
    duplicate.setAttribute("inert", "");
    track.appendChild(duplicate);
    rail.classList.add("is-ready");

    // Controls: Pause / Resume motion button
    const motionBtn = document.querySelector(`[data-motion="${rail.id}"]`);
    const updateMotionBtn = () => {
      if (motionBtn) motionBtn.hidden = prefersReducedMotion.matches;
    };
    updateMotionBtn();
    prefersReducedMotion.addEventListener("change", updateMotionBtn);

    motionBtn?.addEventListener("click", () => {
      const isPaused = rail.classList.toggle("is-paused");
      motionBtn.setAttribute("aria-pressed", String(isPaused));
      motionBtn.textContent = isPaused ? "Resume motion" : "Pause motion";
    });

    // Touch feedback: pause on touch for easy reading on mobile
    let touchResumeTimer;
    rail.addEventListener(
      "touchstart",
      () => {
        clearTimeout(touchResumeTimer);
        rail.classList.add("is-paused");
      },
      { passive: true },
    );

    rail.addEventListener(
      "touchend",
      () => {
        touchResumeTimer = setTimeout(() => {
          if (!motionBtn || motionBtn.getAttribute("aria-pressed") !== "true") {
            rail.classList.remove("is-paused");
          }
        }, 1200);
      },
      { passive: true },
    );
  });
})();
