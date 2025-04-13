// Função para configurar um carrossel
function configurarCarrossel(carrosselID) {
  const bolinhas = document.querySelectorAll(`#${carrosselID} .dot`);
  const trilha = document.querySelector(`#${carrosselID} .produtos-track`);
  const itens = document.querySelectorAll(`#${carrosselID} .box-produtos`);
  const botaoAnterior = document.querySelector(`#${carrosselID} .carousel-btn.left`);
  const botaoProximo = document.querySelector(`#${carrosselID} .carousel-btn.right`);

  const itensPorTela = 5;
  const totalDeItens = itens.length;
  const maxIndice = Math.ceil(totalDeItens / itensPorTela) - 1;
  let indiceAtual = 0;

  // Função para mover os itens e atualizar as bolinhas
  function atualizarCarrossel(indice) {
      // Atualiza bolinhas
      bolinhas.forEach(b => b.classList.remove("active"));
      if (bolinhas[indice]) {
          bolinhas[indice].classList.add("active");
      }

      // Move os itens
      const larguraItem = itens[0].offsetWidth + 20; // largura + espaçamento
      const deslocamento = larguraItem * itensPorTela * indice;
      trilha.style.transform = `translateX(-${deslocamento}px)`;

      // Botão próximo aparece ou some no final
      botaoProximo.style.display = indice >= maxIndice ? 'none' : 'flex';
  }

  // Eventos de clique nas bolinhas
  bolinhas.forEach((b, i) => {
      b.addEventListener("click", () => {
          indiceAtual = i;
          atualizarCarrossel(indiceAtual);
      });
  });

  // Botão anterior sempre visível — só volta se puder
  botaoAnterior.addEventListener("click", () => {
      if (indiceAtual > 0) {
          indiceAtual--;
          atualizarCarrossel(indiceAtual);
      }
  });

  // Botão próximo
  botaoProximo.addEventListener("click", () => {
      if (indiceAtual < maxIndice) {
          indiceAtual++;
          atualizarCarrossel(indiceAtual);
      }
  });

  // Inicia carrossel
  atualizarCarrossel(0);

  // Atualiza posição ao redimensionar a janela
  window.addEventListener("resize", () => {
      atualizarCarrossel(indiceAtual);
  });
}

// Configura os dois carrosséis
configurarCarrossel("carrossel1");
configurarCarrossel("carrossel2");
