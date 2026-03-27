function submitFeedback(){
    const nombre = document.getElementById("name").value;
    const edad = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const trabajo = document.getElementById("job").value;
    const designacion = document.getElementById("designation").value;
    const tipoProducto = document.getElementById("productType").value;
    const productoFeedback = document.getElementById('feedbackText').value;

   const mostrarDatos = document.getElementById("userInfo");
   mostrarDatos.style.display = "block";

   const mostrarNombre = document.getElementById("userName").innerHTML = nombre;
   const mostrarEdad = document.getElementById("userAge").innerHTML = edad;
   const mostrarEmail  = document.getElementById("userEmail").innerHTML = email;
   const mostrarTrabajo = document.getElementById("userJob").innerHTML = trabajo;
   const mostrarDesignacion = document.getElementById("userDesignation").innerHTML = designacion;
   const mostrarProducto = document.getElementById("userProductChoice").innerHTML = tipoProducto;
   const mostrarFeedback = document.getElementById('userFeedback').innerHTML = productoFeedback;
}     

 const enviar = document.getElementById("submitBtn");
 enviar.addEventListener("click", submitFeedback);
 
 document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });