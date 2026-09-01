document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year-actual").textContent = new Date().getFullYear();

  const formMarcador = document.getElementById("form-marcador");
  const contenedorPartidos = document.getElementById("contenedor-partidos");

  const partidos = [
    { local: "Arsenal", golesLocal: 2, visitante: "Chelsea", golesVisitante: 1, fecha: "2026-08-30", categoria: "Oficial" },
    { local: "Manchester City", golesLocal: 3, visitante: "Liverpool", golesVisitante: 2, fecha: "2026-08-31", categoria: "Oficial" }
  ];

  function renderizarPartidos() {
    contenedorPartidos.innerHTML = "";
    partidos.forEach((p) => {
      const div = document.createElement("div");
      div.className = "tarjeta-partido";
      div.innerHTML = `
        <span><strong>${p.local}</strong> vs <strong>${p.visitante}</strong> (${p.categoria}) - <small>${p.fecha}</small></span>
        <span><strong>${p.golesLocal} - ${p.golesVisitante}</strong></span>
      `;
      contenedorPartidos.appendChild(div);
    });
  }

  formMarcador.addEventListener("submit", (e) => {
    e.preventDefault();

    const local = document.getElementById("equipo-local").value.trim();
    const golesLocal = document.getElementById("goles-local").value.trim();
    const visitante = document.getElementById("equipo-visitante").value.trim();
    const golesVisitante = document.getElementById("goles-visitante").value.trim();
    const fecha = document.getElementById("fecha-partido").value;
    const categoria = document.getElementById("categoria").value;

    if (!local || !golesLocal || !visitante || !golesVisitante || !fecha || !categoria) {
      alert("Por favor completa todos los campos del formulario.");
      return;
    }

    const nuevoPartido = {
      local,
      golesLocal,
      visitante,
      golesVisitante,
      fecha,
      categoria
    };

    partidos.push(nuevoPartido);
    renderizarPartidos();
    formMarcador.reset();
  });

  renderizarPartidos();
});