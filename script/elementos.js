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
        const footer = document.querySelector('footer');
        footer.classList.add('footerposition')
    }
    document.querySelector('.secaoConteudo').classList.add('transicao')
    
    }, 1);

    
}

function criarFooter(){
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('div');
    footerContainer.className = 'footer-container';

    // Seção de Redes Sociais
    const socialSection = document.createElement('div');
    socialSection.className = 'footer-section';

    const socialTitle = document.createElement('h3');
    socialTitle.textContent = 'Redes Sociais';

    const socialList = document.createElement('ul');

    const socialPlatforms = ['Facebook', 'Twitter', 'Instagram'];
    socialPlatforms.forEach(platform => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = platform;
        listItem.appendChild(link);
        socialList.appendChild(listItem);
    });

    socialSection.appendChild(socialTitle);
    socialSection.appendChild(socialList);

    // Seção de Contato
    const contactSection = document.createElement('div');
    contactSection.className = 'footer-section';

    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Contato';

    const address = document.createElement('p');
    address.textContent = 'Endereço: Rua dos bobos, 0';

    const email = document.createElement('p');
    email.textContent = 'Email: agente@hotmail.com';

    const phone = document.createElement('p');
    phone.textContent = 'Telefone: (123) 4002-8922';

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(address);
    contactSection.appendChild(email);
    contactSection.appendChild(phone);

    // Adicionar seções ao container do footer
    footerContainer.appendChild(socialSection);
    footerContainer.appendChild(contactSection);

    // Adicionar o container do footer ao body
    footer.appendChild(footerContainer)
    document.body.appendChild(footer);
    
}
criarFooter()    
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

document.querySelectorAll('.container img').forEach(function(img) {
    img.src = '/recursos/imgs/image.png';
});

