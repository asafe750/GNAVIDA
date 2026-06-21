const WHATSAPP_NUMBER = "5571985224584";
const WHATSAPP_DISPLAY = "(71) 98522-4584";

const icons = {
  phone: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v2.1a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.3 2 2 0 0 1 4.11 1.1h2.1a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.8a2 2 0 0 1-.45 2.11L7.55 8.6a16 16 0 0 0 7.85 7.85l.87-.87a2 2 0 0 1 2.11-.45c.9.31 1.84.53 2.8.66A2 2 0 0 1 22 16.92Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  building: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M16 8h3a1 1 0 0 1 1 1v12M3 21h18M8 7h4M8 11h4M8 15h4M9 21v-3h2v3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  stethoscope: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v3a5 5 0 0 0 10 0v-2M20 13a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  activity: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12h4l3-8 4 16 3-8h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  brain: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9.5 2A3.5 3.5 0 0 0 6 5.5v.2A3.5 3.5 0 0 0 3.5 11v1A3.5 3.5 0 0 0 7 15.5V19a3 3 0 0 0 5 2.24A3 3 0 0 0 17 19v-3.5A3.5 3.5 0 0 0 20.5 12v-1A3.5 3.5 0 0 0 18 5.7v-.2A3.5 3.5 0 0 0 14.5 2 3 3 0 0 0 12 3.35 3 3 0 0 0 9.5 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3.35V21M8 8.5A3 3 0 0 0 12 11M16 8.5A3 3 0 0 1 12 11" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "file-search": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7M14 2v6h6M20 14.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM18.5 17l3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "shield-alert": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 8v5M12 16h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 10 18H2L12 3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9v5M12 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  banknote: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.8"/><path d="M6 10h.01M18 14h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v18M5 7h14M6 7l-3 7h6L6 7ZM18 7l-3 7h6l-3-7ZM9 21h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  siren: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 18v-6a5 5 0 0 1 10 0v6M5 18h14M4 22h16M12 2v3M4.5 5.5l2.1 2.1M19.5 5.5l-2.1 2.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "file-warning": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 2v6h6M12 11v4M12 18h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  hardhat: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 18h18M5 18v-3a7 7 0 0 1 14 0v3M9 11V5h6v6M12 5v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "clipboard-check": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4h6a2 2 0 0 1 2 2v1H7V6a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M17 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2M8 14l2 2 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "map-pin": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 2 9 5-9 5-9-5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "badge-dollar": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.78 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.76 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.76Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7v10M15 9.5c-.6-.7-1.5-1-2.5-1-1.4 0-2.5.7-2.5 1.8 0 1 .9 1.5 2.7 1.9 1.9.4 2.8 1 2.8 2.1 0 1.2-1.1 2-2.7 2-1.1 0-2.1-.4-2.8-1.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "chevron-right": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  headphones: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 14v-2a8 8 0 0 1 16 0v2M6 14H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v-5ZM18 14h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1v-5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "heart-pulse": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 12h4l2-3 3 6 2-3h7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  "test-tube": '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 2h4M11 2v6l-6.5 9.5A3 3 0 0 0 7 22h10a3 3 0 0 0 2.5-4.5L13 8V2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 16h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 3v15M15 6v15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><path d="M16.5 7.5h.01M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

document.querySelectorAll(".icon[data-icon]").forEach((element) => {
  const iconName = element.dataset.icon;
  element.innerHTML = icons[iconName] || icons.shield;
});

document.querySelectorAll(".hero-photos img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("is-hidden");
  });
});

document.querySelectorAll(".client-sector-media img").forEach((image) => {
  image.addEventListener("error", () => {
    image.classList.add("is-hidden");
  });
});

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}`);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll('a[href^="https://"]').forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
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
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

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
      "Olá, GNAVIDA. Quero solicitar um orçamento gratuito.",
      `Empresa: ${data.get("empresa")}`,
      `Responsável: ${data.get("responsavel")}`,
      `Telefone / WhatsApp: ${data.get("telefone")}`,
      `Cidade: ${data.get("cidade")}`,
      `Número de funcionários: ${data.get("funcionarios")}`,
      `Serviço de interesse: ${data.get("servico") || "Não informado"}`,
      `Mensagem: ${data.get("mensagem") || "Não informada"}`
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll(".faq-item[open]").forEach((openItem) => {
      if (openItem !== item) openItem.removeAttribute("open");
    });
  });
});
