const apiConfig = [
    { url: 'https://akabab.github.io/superhero-api/api/all.json', secao: '.exemplo1', titulo: 'Exemplo1'},
    { url: 'https://valorant-api.com/v1/weapons?language=pt-BR', secao: '.exemplo2',  titulo: 'Exemplo2'},
    { url: 'https://valorant-api.com/v1/maps?language=pt-BR', secao: '.exemplo3', titulo: 'Exemplo3'},
    { url: 'https://valorant-api.com/v1/competitivetiers?language=pt-BR', secao: '.exemplo4', titulo: 'Exemplo4'}
];
function fetchData(url, secao){
    fetch(url)
    .then(response => response.json())
    .then(dados => {
        console.log(dados);
        for (let i = 0; i < 25; i++) { // ajustar o valor para a quantidade de cards que aparecem na rolagem
            const image = dados[i].images.lg || dados[i].displayIcon; //ajustar os tipos de dados que vai pegar da api
            const name = dados[i].name;
            // uma descricao do elemento para o popup seria interessante, por exemplo: const descricao = dados[i].descricao; 
            criarCards(image, name, secao);
        }
    })
    .catch(error => {
        console.error(`Error fetching data from ${url}:`, error);
    });
};


apiConfig.forEach(item => {
    criarSecoesCards(item.secao, item.titulo, item.url),
    fetchData(item.url, item.secao)
});

function criarSecoesCards(secao, titulo, urlSecao){

    const secaoConteudo = document.querySelector('.secaoConteudo');
    const cardSecoes = document.createElement('section');
    cardSecoes.className = `cardSecoes ${secao.substring(1)}`;
    secaoConteudo.appendChild(cardSecoes);

    const tituloSecao = document.createElement('div');
    tituloSecao.className = 'tituloSecao';
    cardSecoes.appendChild(tituloSecao);

    const p = document.createElement('p');
    p.innerHTML = titulo;
    tituloSecao.appendChild(p);
    
    const verMais = document.createElement('div');
    verMais.className = 'verMais';
    
    cardSecoes.appendChild(verMais);

    const verMaisBotao = document.createElement('a');
    verMaisBotao.className = 'verMaisBotao';
    verMaisBotao.innerHTML = 'Ver mais &#10140;';
    verMaisBotao.addEventListener('click', ()=> verMaisfunc(urlSecao, titulo))
    
    verMais.appendChild(verMaisBotao);

    const botaoPrev = document.createElement('button');
    botaoPrev.className = 'prev';
    botaoPrev.innerHTML = '&#10094;';
    botaoPrev.addEventListener('click', ()=> moveCarousel(secao, -1));
    cardSecoes.appendChild(botaoPrev);

    const botaoNext = document.createElement('button');
    botaoNext.className = 'next';
    botaoNext.innerHTML = '&#10095;';
    botaoNext.addEventListener('click', () => moveCarousel(secao, 1));
    cardSecoes.appendChild(botaoNext);

    const cardContainer = document.createElement('div');
    cardContainer.className = 'cardContainer';
    cardSecoes.appendChild(cardContainer);
}
function criarCards(imgUrl, cardTitulo, cardSecao) {
    const cardSecaoElement = document.querySelector(cardSecao);
    if (!cardSecaoElement) {
        console.error(`Elemento ${cardSecao} não encontrado.`);
        return;
    }

    const cardContainer = cardSecaoElement.querySelector('.cardContainer');
    if (!cardContainer) {
        console.error(`Elemento .cardContainer não encontrado em ${cardSecao}.`);
        return;
    }

    const a = document.createElement('a');
    const card = document.createElement('div');
    const cardImg = document.createElement('img');
    const titulo = document.createElement('p');

    a.className = 'cardLink';
    a.addEventListener('click', () => criarPopup(imgUrl, cardTitulo)); //ajustar os parametros pra os popups receberem mais informações

    card.className = 'card';

    cardImg.className = 'cardImagem';
    cardImg.src = imgUrl;

    titulo.className = 'cardTexto';
    titulo.innerHTML = cardTitulo;

    card.appendChild(a);
    card.appendChild(cardImg);
    card.appendChild(titulo);
    document.querySelector(cardSecao).querySelector('.cardContainer').appendChild(card);
}
function criarPopup(imgUrl, cardTitulo) { //ajustar os parametros pra os popups receberem mais informações
            let popupcontainer = document.querySelector('.popupcontainer');
            if (!popupcontainer) {
                popupcontainer = document.createElement('div');
                popupcontainer.className = 'popupcontainer';
                document.body.appendChild(popupcontainer);
            }
            const cardPopUp = document.createElement('div');
            cardPopUp.className = 'cardPopUp';

            const imgPopup = document.createElement('img');
            imgPopup.className = 'imgPopup';
            imgPopup.src = imgUrl;

            const tituloPopup = document.createElement('h1');
            tituloPopup.className = 'tituloPopup';
            tituloPopup.innerHTML = cardTitulo;

            const descricaoPopup = document.createElement('p');
            descricaoPopup.className = 'descricaoPopup';
            descricaoPopup.innerHTML = '';

            const fecharPopup = document.createElement('button');
            fecharPopup.className = 'fecharPopup';
            fecharPopup.innerHTML = '&#10005;';
            fecharPopup.addEventListener('click', abrirfecharPopUp);

            cardPopUp.appendChild(imgPopup);
            cardPopUp.appendChild(tituloPopup);
            cardPopUp.appendChild(descricaoPopup);
            cardPopUp.appendChild(fecharPopup);

            popupcontainer.innerHTML = ''; 
            popupcontainer.appendChild(cardPopUp);
            setTimeout(() => {
                abrirfecharPopUp()
            }, 1);
        }
function abrirfecharPopUp(){
    const popup = document.querySelector('.popupcontainer');
    popup.classList.toggle('active');
}
function moveCarousel(secao, direcao) {
    const container = document.querySelector(`${secao} .cardContainer`);
    const scroll = container.clientWidth / 1; // Valor da rolagem horizontal do carrossel
    container.scrollLeft += direcao * scroll;
}
function verMaisfunc(urlSecao, titulo){
    window.location.href = 'galeriacompleta.html?url=' + urlSecao + '&titulo='+ titulo;

}
