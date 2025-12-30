document.addEventListener("click", (e) => {
  const el = e.target.closest("a");
  if (!el) return;

  e.preventDefault();
  carregaPagina(el);
});

async function carregaPagina(link) {
  try {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("#")) return;
    const response = await fetch(href);
    if (!response.ok)
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);

    const texto = await response.text();
    carregaResultado(texto);
  } catch (err) {
    carregaResultado(
      `<p style="color:red;">Não foi possível carregar: ${err.message}</p>`
    );
  }
}

function carregaResultado(texto) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = texto;
}
