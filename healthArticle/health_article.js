const xhr = new XMLHttpRequest();
const url = './health_article.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function(){
    const articles = xhr.response.article;
    const articlesDiv = document.getElementById('articles');
    
}