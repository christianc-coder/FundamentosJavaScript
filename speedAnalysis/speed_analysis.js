let testText = "El zorro conchetumare salta encima del perro cojudo";
let startTime, endTime; 
 function startTest(){

    // Pasa el texto de prueba al html  
    document.getElementById("inputText").value = testText; 

    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    startTime = new Date().getTime();
}

function endTest(){
    
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;
    
    const timeElapsed = (endTime - startTime) / 1000;
    userTypedText = document.getElementById('userInput').value; 
    const longitudText = userTypedText.length;
    
    const typeWords = userTypedText.split(/\s+/).filter( (m) => {return m !== ""}).length;

    let wpm = 0;

    if(timeElapsed !== 0 && !isNaN(typeWords)){
        wpm = Math.round(( typeWords / timeElapsed) * 60);
    }
    
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Resultados de la Prueba</h2>" +
    "<p>Longitud de Texto: " + longitudText + "</p>" +
    "<p>Palabras escritas:" + typeWords + "</p>" +
    "<p>Tiempo Transcurrido:" + timeElapsed.toFixed(2) + "segundos</p>" +
    "<p>Palabras por minuto (WPM):" + wpm + "</p>";
}
