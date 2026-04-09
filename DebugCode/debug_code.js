	
	function performOperation(){

        let num1 = Number(document.getElementById("input1").value);
        let num2 = Number(document.getElementById("input2").value);
        let operador = document.getElementById("operacion").value;

        if(!isNaN(num1) && !isNaN(num2)){


        function proceso (num1, num2, operador){ 

            let resultado;

             switch(operador){
                case "suma":
                    resultado = num1 + num2
                break;
                case "resta":
                    resultado = num1 - num2
                break;
                case "multiplicacion":
                    resultado = num1 * num2
                break;
                case "division":
                    resultado = num1 / num2
                break;
                default:
                   return "No es valido"
            }
            return resultado;
        }
    resultado = proceso(num1, num2, operador);
    displayResult(resultado);

}  else {

    alert("Agregue un mesanje valido");
}

function displayResult(resultado){
    const salida = document.getElementById("result");
    salida.innerText = ` El resultado de su operacion es ${resultado}`
}
}
