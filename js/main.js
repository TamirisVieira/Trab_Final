let url = `https://dark-bathing-suit-cod.cyclic.app/listar`;
const main = document.getElementById('exibir');

window.addEventListener('load', e => {
    postNews();
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 

async function postNews() {
    const res = await fetch(url);
    const data = await res.json();
    main.innerHTML = data.map(createArticle).join('\n');
}

function createArticle(article){
    return `
           <div class="article">

                    <img src="${article.imagem}" class="image"/>
                    <h2>${article.titulo}</h2>
                    <p>${article.descricao}</p>
                    <p>${article.preco}</p>
                </a>
           </div>
    `
}