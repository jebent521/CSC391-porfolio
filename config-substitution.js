document.querySelectorAll("[data-config-href]").forEach((el) => {
  const key = el.dataset.configHref;
  el.href = window.APP_CONFIG[key];
});