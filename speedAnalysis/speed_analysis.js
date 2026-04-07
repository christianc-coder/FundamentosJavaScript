let testText = "El zorro conchetumare salta encima del perro cojudo";
let starTime, endTime; 
 function startTest(){

    // Pasa el texto de prueba al html  
    document.getElementById("inputText").value = testText; 

    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
}
