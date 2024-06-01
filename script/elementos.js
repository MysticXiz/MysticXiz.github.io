function criarHeader(){
    const header = document.createElement('header');
    const linkContainer = document.createElement('nav');
    linkContainer.className = 'linkContainer';

    const headerBotao = document.createElement('a');
    headerBotao.href = '/index.html';
    headerBotao.className = 'headerBotao home';
    headerBotao.innerHTML = 'Home';
    const headerBotao2 = document.createElement('a');
    headerBotao2.href = '/paginas/galeria.html';
    headerBotao2.className = 'headerBotao galeria';
    headerBotao2.innerHTML = 'Galeria';
    const headerBotao3 = document.createElement('a');
    headerBotao3.href = '/paginas/cadastro.html';
    headerBotao3.className = 'headerBotao cadastro';
    headerBotao3.innerHTML = 'Cadastre-se';
    const botaoAltModoescuro = document.createElement('button');
    botaoAltModoescuro.className = 'botaoAltModoescuro';
    
    botaoAltModoescuro.addEventListener('click', ()=> alternarModoEscuro());
    const botaoImg = document.createElement('img');
    botaoImg.className = 'botaoImg'
    botaoAltModoescuro.appendChild(botaoImg);
    botaoImg.src = localStorage.getItem('modoEscuro') === 'true' ? '../recursos/imgs/sun.png' : '../recursos/imgs/moon.png';


    linkContainer.appendChild(headerBotao);
    linkContainer.appendChild(headerBotao2);
    linkContainer.appendChild(headerBotao3);

    header.appendChild(linkContainer);
    header.appendChild(botaoAltModoescuro);
    document.body.insertBefore(header, document.body.firstChild);
    const paginaAtual = window.location.pathname.split('/').pop(); 
    setTimeout(() => {
    if (paginaAtual === 'index.html') {
        headerBotao.classList.add('botaoSelecionado');
    } else if (paginaAtual === 'galeria.html' || paginaAtual === 'galeriacompleta.html' ) {
        headerBotao2.classList.add('botaoSelecionado');
    } else if (paginaAtual === 'cadastro.html') {
        headerBotao3.classList.add('botaoSelecionado');
    }
    document.querySelector('.secaoConteudo').classList.add('transicao')
    
    }, 1);
    
}
function criarFooter(){
    
}

criarHeader()
function alternarModoEscuro() {
  const body = document.body;
  body.classList.toggle('light-mode');
  
  
  if (body.classList.contains('light-mode')) {
      localStorage.setItem('modoEscuro', 'false');
      document.querySelector('.botaoImg').src = '../recursos/imgs/moon.png'
  } else {
      localStorage.setItem('modoEscuro', 'true');
      document.querySelector('.botaoImg').src = '../recursos/imgs/sun.png'
  }
}


window.addEventListener('DOMContentLoaded', () => {
  const modoEscuro = localStorage.getItem('modoEscuro');
  if (modoEscuro === 'true') {
      document.body.classList.remove('light-mode');
      
  } else if (modoEscuro === 'false') {
      document.body.classList.add('light-mode');
      
  }
});