(function () {
  const config = window.BURNHAM_SITE_CONFIG || {};
  const phoneDisplay = config.phoneDisplay || "";
  const phoneHref = config.phoneHref || "";
  const email = config.email || "";
  const serviceArea = config.serviceArea || "Southern Maine";
  const businessName = config.businessName || "J.P. Burnham Drywall";
  const year = new Date().getFullYear();

  document.querySelectorAll("[data-business-name]").forEach(el => el.textContent = businessName);
  document.querySelectorAll("[data-service-area]").forEach(el => el.textContent = serviceArea);
  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = year);

  document.querySelectorAll("[data-phone]").forEach(el => {
    if (phoneDisplay) el.textContent = phoneDisplay;
    if (phoneHref) el.href = "tel:" + phoneHref;
  });
  document.querySelectorAll("[data-email]").forEach(el => {
    if (email) el.textContent = email;
    if (email) el.href = "mailto:" + email;
  });
  document.querySelectorAll("[data-map]").forEach(el => {
    if (config.googleMapsUrl) el.href = config.googleMapsUrl;
  });

  const nav = document.querySelector(".site-nav");
  const toggle = document.querySelector(".menu-toggle");
  if (nav && toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      document.body.classList.toggle("menu-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.innerHTML = isOpen ? "×" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = "☰";
    }));
  }

  const form = document.querySelector("[data-quote-form]");
  const notice = document.querySelector(".notice");
  if (form && notice) {
    form.addEventListener("submit", function () {
      // Netlify handles production submissions when deployed there.
      // This visual confirmation is still useful on local previews.
      notice.textContent = "Thank you — your request is ready to send. We will be in touch as soon as possible.";
      notice.classList.add("show");
    });
  }
})();
