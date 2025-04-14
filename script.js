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


//Exibir function

listLink = document.getElementById('list-link') 
listCall = document.getElementById("list-call")
listHelp = document.getElementById("list-help")

function exibir(type){
    
    let cards = [listLink, listCall, listHelp];
    let botoes = document.querySelectorAll(".top-title button")
    let cardSelecionado
    let botaoSelecionado
    
    if (type === 'link'){
        cardSelecionado = listLink;
        botaoSelecionado = document.querySelector(".footer-column-institucional .top-title button")
    } 
    if (type === 'call'){
        cardSelecionado = listCall;
        botaoSelecionado = document.querySelector(".footer-column-atendimento .top-title button")
    } 
    if (type === 'help') {
        cardSelecionado = listHelp;
        botaoSelecionado = document.querySelector(".footer-column-ajuda .top-title button")
    }
    
    if (cardSelecionado.classList.contains('aberto')) {
        cardSelecionado.classList.remove('aberto');
        botaoSelecionado.classList.remove("girar");
        return;
      }

      cards.forEach(card => card.classList.remove('aberto'));
      botoes.forEach(botao => botao.classList.remove('girar'));

      // Abre o selecionado
      cardSelecionado.classList.add('aberto');
      botaoSelecionado.classList.add('girar');
}