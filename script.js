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
  
      // Controla exibição do botão "próximo"
      if (window.innerWidth > 768) {
        botaoProximo.style.display = indice >= maxIndice ? 'none' : 'flex';
      } else {
        botaoProximo.style.display = 'none';
      }
    }
  
    // Evento de clique nas bolinhas
    bolinhas.forEach((b, i) => {
      b.addEventListener("click", () => {
        indiceAtual = i;
        atualizarCarrossel(indiceAtual);
      });
    });
  
    // Evento de clique no botão "anterior"
    botaoAnterior.addEventListener("click", () => {
      if (indiceAtual > 0) {
        indiceAtual--;
        atualizarCarrossel(indiceAtual);
      }
    });
  
    // Evento de clique no botão "próximo"
    botaoProximo.addEventListener("click", () => {
      if (indiceAtual < maxIndice) {
        indiceAtual++;
        atualizarCarrossel(indiceAtual);
      }
    });
  
    // Atualiza carrossel ao redimensionar a janela
    window.addEventListener("resize", () => {
      atualizarCarrossel(indiceAtual);
    });
  
    // Inicia o carrossel
    atualizarCarrossel(0);
  }
  
  // Configura os carrosséis
  configurarCarrossel("carrossel1");
  configurarCarrossel("carrossel2");
  

  


  
//Exibir function

function atualizarCarrossel(indice) {
    const isMobile = window.innerWidth <= 576;
  
    bolinhas.forEach(b => b.classList.remove("active"));
    if (bolinhas[indice]) {
      bolinhas[indice].classList.add("active");
    }
  
    if (!isMobile) {
      const larguraItem = itens[0].offsetWidth + 20;
      const deslocamento = larguraItem * itensPorTela * indice;
      trilha.style.transform = `translateX(-${deslocamento}px)`;
      botaoProximo.style.display = indice >= maxIndice ? 'none' : 'flex';
    } else {
      trilha.style.transform = 'none';
      botaoProximo.style.display = 'none';
    }
  }

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