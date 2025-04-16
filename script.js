// Função para configurar um carrossel
function configurarCarrossel(carrosselID) {
  const bolinhas = document.querySelectorAll(`#${carrosselID} .dot`);
  const trilha = document.querySelector(`#${carrosselID} .produtos-track`);
  const itens = document.querySelectorAll(`#${carrosselID} .box-produtos`);
  const container = document.querySelector(`#${carrosselID} .produtos-container`);
  const botaoAnterior = document.querySelector(`#${carrosselID} .carousel-btn.left`);
  const botaoProximo = document.querySelector(`#${carrosselID} .carousel-btn.right`);

  const itensPorTela = 5;
  const totalDeItens = itens.length;
  const maxIndice = Math.ceil(totalDeItens / itensPorTela) - 1;
  let indiceAtual = 0;

  function atualizarDots(indice) {
    bolinhas.forEach(b => b.classList.remove("active"));
    if (bolinhas[indice]) {
      bolinhas[indice].classList.add("active");
    }
  }

  function atualizarCarrossel(indice) {
    const isMobile = window.innerWidth <=1200;

    atualizarDots(indice);

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

  bolinhas.forEach((b, i) => {
    b.addEventListener("click", () => {
      indiceAtual = i;
      atualizarCarrossel(indiceAtual);
    });
  });

  botaoAnterior.addEventListener("click", () => {
    if (indiceAtual > 0) {
      indiceAtual--;
      atualizarCarrossel(indiceAtual);
    }
  });

  botaoProximo.addEventListener("click", () => {
    if (indiceAtual < maxIndice) {
      indiceAtual++;
      atualizarCarrossel(indiceAtual);
    }
  });

  // Evento de scroll no mobile
  container.addEventListener("scroll", () => {
    if (window.innerWidth <= 1200) {
      const larguraItem = itens[0].offsetWidth + 20;
      const itensPorPagina = Math.floor(container.offsetWidth / larguraItem);
      const indice = Math.round(container.scrollLeft / (larguraItem * itensPorPagina));
      atualizarDots(indice);
    }
  });

  window.addEventListener("resize", () => {
    atualizarCarrossel(indiceAtual);
  });

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



const btnCategorias = document.querySelector(".btn-categorias");
const categoriasHover = document.querySelector(".categorias-hover");

btnCategorias.addEventListener("mouseover", () => {
  categoriasHover.style.display = "flex";
  console.log("Entrou");
});

categoriasHover.addEventListener("mouseleave", () => {
  categoriasHover.style.display = "none";
  console.log("saiu");
  
});


const itemCategorias = document.querySelectorAll(".menu-coluna li");
const subCategorias = document.querySelector(".subcategorias");


let subAberto = false;

// Hover

itemCategorias.forEach(item => {
  item.addEventListener("mouseover", () => {
    if (!subAberto) {
      subCategorias.style.opacity = "1";
    }
  });

  item.addEventListener("mouseout", () => {
    if (!subAberto) {
      subCategorias.style.opacity = "0";
    }
  });

  // Clique
  item.addEventListener("click", () => {
    subAberto = !subAberto;

    if (subAberto) {
      subCategorias.style.opacity = "1";
    } else {
      subCategorias.style.opacity = "0";
    }
  });
});



const departamentoLinks = document.querySelectorAll(".nav-links li a");
const menuHover = document.querySelector(".hover-departamento");

departamentoLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    menuHover.style.display = "flex";
    
  });
});

menuHover.addEventListener("mouseleave", () => {
  menuHover.style.display = "none";
  
});


let menuMobile = document.querySelector(".menu-mobile");
let exibirMenu = document.querySelector('.exibir-menu')
let icone = document.querySelector('.exibir-menu i')


let aberto = true

exibirMenu.addEventListener("click", () => {
  aberto = !aberto;
  if(aberto) {
    menuMobile.style.transform= "translateX(0)";
    exibirMenu.style.transform= "translateX(800%)";
    icone.classList.replace("fa-bars", "fa-xmark");

  }else{
    menuMobile.style.transform = "translateX(-300px)";
    exibirMenu.style.transform= "translateX(0)";
    icone.classList.replace("fa-xmark", "fa-bars")
  }
})







// for (let i = 0; i<listaPalavras.length(); i++) {
  
//   console.log(listaPalavras[i]);
// }
const suggestions = document.getElementById("suggestions")
const input = document.getElementById("input")
const inputMobile = document.getElementById("input-mobile")
const containerBusca = document.querySelectorAll(".container h1,h2,h3,p")


input.addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase()
  
  suggestions.innerHTML = "";
  suggestions.style.display = "none";

  if(valor.trim() === "") return;

  const palavrasExibidas = new Set();

  containerBusca.forEach((section,index)=> {
    const texto = section.textContent.toLowerCase()
    
    
    if(texto.indexOf(valor)> -1 && !palavrasExibidas.has(texto)) {
      palavrasExibidas.add(texto);

      if (!section.id) {
        section.id = `paragrafo-${index}`
      }

      const link = document.createElement("a")
      link.href = `#${section.id}`;

      const suggestionExibir = section.textContent.length > 50 ? section.textContent.slice(0, 20) + "..." : section.textContent;

      link.textContent = suggestionExibir;
      suggestions.appendChild(link)
      suggestions.style.display = "flex"
    }
  });
});

//mobile
inputMobile.addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase()

  suggestions.innerHTML = "";
  suggestions.style.display = "none";

  if(valor.trim() === "") return;

  const palavrasExibidas = new Set();

  containerBusca.forEach((section,index)=> {
    const texto = section.textContent.toLowerCase()
    
    
    if(texto.indexOf(valor)> -1 && !palavrasExibidas.has(texto)) {
      palavrasExibidas.add(texto);

      if (!section.id) {
        section.id = `paragrafo-${index}`
      }

      const link = document.createElement("a")
      link.href = `#${section.id}`;

      const suggestionExibir = section.textContent.length > 50 ? section.textContent.slice(0, 20) + "..." : section.textContent;

      link.textContent = suggestionExibir;
      suggestions.appendChild(link)
      suggestions.style.display = "flex"
    }
  });
});

listaPalavras = []
async function acessoJson() {
  const banco = await fetch("bd.json");
  const dados = await banco.json();

  listaPalavras = dados.palavras;

  
  console.log(listaPalavras)
}


acessoJson();

function buscarTopico(){

  const valorInput = input.value.toLowerCase().trim()
  
  if (listaPalavras.includes(valorInput)) {
    const destino = document.getElementById(valorInput)
    if(destino){
      const link = document.createElement("a")
      link.href=`#${valorInput}`
      link.textContent = valorInput
      suggestions.style.display = "block"
      suggestions.appendChild(link)

    }else{
      alert("Esse tópico não existe no conteúdo.");

    }
  } else {
    alert("Essa palavra não está na lista de palavras permitidas.");
  }
  
}

