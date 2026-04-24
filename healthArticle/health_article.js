const xhr = new XMLHttpRequest();
const url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';


xhr.onload = function(){
    const articlesJson = xhr.response.articles;
    const articlesDiv = document.getElementById('articles');
    
    articlesJson.forEach(function(article) {
        const div = document.createElement("div");
        const titulo = document.createElement("h2");
        const descripcion = document.createElement("p");
        const listHeader = document.createElement("h3");
        const ul = document.createElement("ul");

        div.classList.add('article');
        titulo.textContent = article.title;
        descripcion.textContent = article.description;
        listHeader.textContent = "Consejos para lograrlo";

        article.ways_to_achieve.forEach(function(recomendaciones){
            const li = document.createElement('li');
            li.textContent = recomendaciones;
            ul.appendChild(li);
        });

        const beneficiosHeader = document.createElement("h3");
        beneficiosHeader.textContent = "Beneficios";

        const ul2 = document.createElement('ul');
        article.benefits.forEach((benefit) => {
            const li = document.createElement('li');
            li.textContent = benefit;
            ul2.appendChild(li);
        });
        

        div.appendChild(titulo);
        div.appendChild(descripcion);
        div.appendChild(listHeader);
        div.appendChild(ul);
        div.appendChild(beneficiosHeader);
        div.appendChild(ul2);

        articlesDiv.appendChild(div);
    });
}

xhr.send();