const WHATSAPP_NUMBER = "INSERIR_NUMERO"; // Substitua pelo número com DDI e DDD. Exemplo: 5571999999999

const iconSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const phoneSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v2.1a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.3 2 2 0 0 1 4.11 1.1h2.1a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L7.55 8.6a16 16 0 0 0 7.85 7.85l.87-.87a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const instagramSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><path d="M16.5 7.5h.01M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const mapSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const medicalSvg = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const iconMap = {
  phone: phoneSvg,
  instagram: instagramSvg,
  "map-pin": mapSvg,
  map: mapSvg,
  activity: medicalSvg,
  stethoscope: medicalSvg,
  "heart-pulse": medicalSvg,
  headphones: medicalSvg,
  eye: medicalSvg,
  "test-tube": medicalSvg,
  alert: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 10 18H2L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9v5M12 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "file-warning": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M12 11v4M12 18h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  hardhat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 18h18M5 18v-3a7 7 0 0 1 14 0v3M9 11V5h6v6M12 5v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "clipboard-check": iconSvg,
  shield: iconSvg,
  clock: iconSvg,
  layers: iconSvg,
  building: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M16 8h3a1 1 0 0 1 1 1v12M3 21h18M8 7h4M8 11h4M8 15h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

document.querySelectorAll(".icon[data-icon]").forEach((element) => {
  element.innerHTML = iconMap[element.dataset.icon] || iconSvg;
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Abrir menu");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealElements = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const quoteForm = document.querySelector("#quote-form");

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(quoteForm);
    const message = [
      "Olá, GNAVIDA. Quero solicitar um orçamento.",
      `Nome: ${data.get("nome")}`,
      `Empresa: ${data.get("empresa")}`,
      `Cidade: ${data.get("cidade")}`,
      `WhatsApp: ${data.get("whatsapp")}`,
      `Colaboradores: ${data.get("colaboradores")}`,
      `Mensagem: ${data.get("mensagem") || "Não informada"}`
    ].join("\n");

    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });
}
