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
    
    }, 10);

    
}

function criarFooter(){
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';
    // Seção texto
    const secaoTexto = document.createElement('div');
    secaoTexto.className = 'footer-section';
    const textofooter = document.createElement('p');
    textofooter.textContent = 'Copyright @2024 PatoDevs' ;secaoTexto.appendChild(textofooter);

    // Seção de Redes Sociais
    const secaoSocial = document.createElement('div');
    secaoSocial.className = 'footer-section-social';
    const ico1 = document.createElement('a');
    const ico2 = document.createElement('a');
    const ico3 = document.createElement('a');
    const ico1img = document.createElement('img');
    const ico2img = document.createElement('img');
    const ico3img = document.createElement('img');
    ico1img.className= 'twitter'
    ico2img.className= 'instagram'
    ico3img.className= 'facebook'
    ico1img.src = localStorage.getItem('modoEscuro') === 'true' ? '../recursos/imgs/xwhite.png' : '../recursos/imgs/xblack.png';
    ico2img.src = localStorage.getItem('modoEscuro') === 'true' ? '../recursos/imgs/instagramwhite.png' : '../recursos/imgs/instagramblack.png';
    ico3img.src = localStorage.getItem('modoEscuro') === 'true' ? '../recursos/imgs/facebookwhite.png' : '../recursos/imgs/facebookblack.png';

    // Seção de info
    const secaoinfo = document.createElement('div');
    secaoinfo.className = 'footer-section-info';

    const home = document.createElement('a');
    home.textContent = 'Home';

    const sobre = document.createElement('a');
    sobre.textContent = 'Sobre';

    const contato = document.createElement('a');
    contato.textContent = 'Contato';
    home.href = '#'
    sobre.href = '#'
    contato.href = '#'

    ico1.appendChild(ico1img);
    ico2.appendChild(ico2img);
    ico3.appendChild(ico3img);

    secaoSocial.appendChild(ico1);
    secaoSocial.appendChild(ico2);
    secaoSocial.appendChild(ico3);

    secaoinfo.appendChild(home);
    secaoinfo.appendChild(sobre);
    secaoinfo.appendChild(contato);

    // Adicionar seções ao container do footer
    footerContainer.appendChild(secaoTexto);
    footerContainer.appendChild(secaoSocial);
    footerContainer.appendChild(secaoinfo);
    

    // Adicionar o container do footer ao body
    footer.appendChild(footerContainer)
    document.body.appendChild(footer);
    
}
criarFooter()
criarHeader()

function alternarModoEscuro() {
    const body = document.body;
    body.classList.toggle('light-mode');

    const modoEscuro = body.classList.contains('light-mode') ? 'false' : 'true';
    localStorage.setItem('modoEscuro', modoEscuro);

    document.querySelector('.botaoImg').src = modoEscuro === 'true' ? '../recursos/imgs/sun.png' : '../recursos/imgs/moon.png';
    document.querySelector('.twitter').src = modoEscuro === 'true' ? '../recursos/imgs/xwhite.png' : '../recursos/imgs/xblack.png';
    document.querySelector('.instagram').src = modoEscuro === 'true' ? '../recursos/imgs/instagramwhite.png' : '../recursos/imgs/instagramblack.png';
    document.querySelector('.facebook').src = modoEscuro === 'true' ? '../recursos/imgs/facebookwhite.png' : '../recursos/imgs/facebookblack.png';
}


window.addEventListener('DOMContentLoaded', () => {
  const modoEscuro = localStorage.getItem('modoEscuro');
  if (modoEscuro === 'true') {
      document.body.classList.remove('light-mode');
      
  } else if (modoEscuro === 'false') {
      document.body.classList.add('light-mode');
      
  }
});

document.querySelectorAll('.container img').forEach(function(img) {
    img.src = '/recursos/imgs/image.png';
});

setTimeout(() => {
    document.querySelector('main').classList.add('opacidade');
    document.querySelector('footer').classList.add('opacidade');
}, 2);