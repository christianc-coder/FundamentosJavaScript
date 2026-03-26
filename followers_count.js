let count = 0; // inicializado en 0

function  increaseCount(){
    count++; //incrementa el conteo  en 1
    displayCount(); //ejecuta la otra funcion simultaniamente
    checkCountValue(); //ejecuta la otra funcion simultaniamente
}
function displayCount(){
    const numeroDeConteo = document.getElementById("countDisplay");
    numeroDeConteo.innerHTML = count;
}
function checkCountValue(){
    if(count === 10){
        alert("¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!");   
    } else if (count === 20 ){
        alert("¡Tu publicación de Instagram ganó 20 seguidores! ¡Sigue Asi!");
    } 

}