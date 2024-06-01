function criarHeader(){
    const header = document.createElement('header');
    const linkContainer = document.createElement('nav');
    linkContainer.className = 'linkContainer'

    const headerBotao = document.createElement('a');
    headerBotao.href = '/index.html'
    headerBotao.className = 'headerBotao home'
    headerBotao.innerHTML = 'Home'
    const headerBotao2 = document.createElement('a');
    headerBotao2.href = '/paginas/galeria.html'
    headerBotao2.className = 'headerBotao galeria'
    headerBotao2.innerHTML = 'Galeria'
    const headerBotao3 = document.createElement('a');
    headerBotao3.href = '/paginas/cadastro.html'
    headerBotao3.className = 'headerBotao cadastro'
    headerBotao3.innerHTML = 'Cadastre-se'
    const botaoAltModoescuro = document.createElement('button');
    botaoAltModoescuro.className = 'botaoAltModoescuro'
    botaoAltModoescuro.innerHTML = 'Modo escuro'
    botaoAltModoescuro,addEventListener('click', ()=> alternarModoEscuro())


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
    const elementos = document.body;
    const modoAtual = elementos.style.getPropertyValue('--background-padrao-cor');
    const novoModo = modoAtual === '#ffffff' ? '#151515' : '#ffffff';
  
    elementos.style.setProperty('--background-padrao-cor', novoModo);
    localStorage.setItem('modoEscuro', novoModo === '#151515');
  }
  
  function carregarConfiguracoes() {
    const modoEscuro = localStorage.getItem('modoEscuro') === 'true';
    if (modoEscuro) {
      alternarModoEscuro();
    }
  }
