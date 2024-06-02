const apiConfig = [
    { url: 'https://rickandmortyapi.com/api/character', titulo: 'Rick and Morty Characters' }
];

let paginaAtual = 1;
// Fetch data from API and create cards
function fetchData(page = 1) {
apiConfig.forEach(config => {
    fetch(`${config.url}?page=${page}`)
        .then(response => response.json())
        .then(dados => {
            const results = dados.results;
            document.querySelector('.secaoCardCompleto').innerHTML = ''
            results.forEach(element => {
                criarCards(element.image, element.name, element.status, element.species, element.gender, element.origin.name, element.location.name);
            });
            atualizarPagInfo(dados.info.pages);
        })
        .catch(error => {
            console.error(`Erro obtendo dados de '${config.url}':`, error);
        });
        
});
}
function atualizarPagInfo(paginasTotais) {
    document.getElementById('pagInfo').textContent = `Página ${paginaAtual} de ${paginasTotais}`;
    if(paginaAtual > 1){
        document.getElementById('pagAnterior').classList.add('opacidade');
    }else{
         document.getElementById('pagAnterior').classList.remove('opacidade');
    }
    if(paginaAtual === 42){
        document.getElementById('proximaPag').classList.remove('opacidade');
    }else{
         document.getElementById('proximaPag').classList.add('opacidade');
    }
}


document.getElementById('pagAnterior').addEventListener('click', () => {
    if (paginaAtual > 1) {
        paginaAtual--;
        fetchData(paginaAtual);
    }
});

document.getElementById('proximaPag').addEventListener('click', () => { if(paginaAtual < 42){
    paginaAtual++;
    fetchData(paginaAtual);
}
});
fetchData();



function criarCards(imgUrl, cardTitulo, cardstatus, cardEspecie, cardGenero, cardOrigem, cardLocal) {
    const card = document.createElement('div');
    const cardImg = document.createElement('img');
    const titulo = document.createElement('p');
    const cardTituloContainer = document.createElement('div');

    cardImg.addEventListener('click', (event) => {
        event.preventDefault();
        criarPopup(imgUrl, cardTitulo, cardstatus, cardEspecie, cardGenero, cardOrigem, cardLocal);
    });
    cardTituloContainer.className = 'cardTituloContainer'
    
    card.className = 'cardCompleto';
    cardImg.className = 'cardImagem';
    cardImg.src = imgUrl;

    titulo.className = 'cardTitulo';
    titulo.textContent = cardTitulo;

    cardTituloContainer.appendChild(titulo);
    card.appendChild(cardTituloContainer);
    card.appendChild(cardImg);

    document.querySelector('.secaoCardCompleto').appendChild(card);
}

function criarPopup(imgUrl, cardTitulo, cardstatus, cardEspecie, cardGenero, cardOrigem, cardLocal) {
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
    tituloPopup.textContent = cardTitulo;


    const descricaoPopup = document.createElement('p');
    descricaoPopup.className = 'descricaoPopup';

    descricaoPopup.innerHTML = `Status: ${cardstatus}<br>Species: ${cardEspecie}<br>Gender: ${cardGenero}<br>Origin: ${cardOrigem}<br>Local: ${cardLocal}`;

    const fecharPopup = document.createElement('button');
    fecharPopup.className = 'fecharPopup';
    fecharPopup.innerHTML = '&#10005;';
    fecharPopup.addEventListener('click', togglePopup);

    cardPopUp.appendChild(imgPopup);
    cardPopUp.appendChild(tituloPopup);
    cardPopUp.appendChild(descricaoPopup);
    cardPopUp.appendChild(fecharPopup);

    popupcontainer.innerHTML = ''; 
    popupcontainer.appendChild(cardPopUp);

    setTimeout(() => {
        togglePopup();
    }, 1);
}

function togglePopup() {
    const popup = document.querySelector('.popupcontainer');
    popup.classList.toggle('active');
}
