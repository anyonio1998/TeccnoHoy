function validar() {
    
    validarNombre();
    validarEmail();
    validarTelefono();
    validarAsunto();
}

    function validarNombre() {
    
        if (document.querySelector('#nombre').value.length == 0) {
            alert("Rellena el campo de nombre");
            return false;
        }else{
            return true;
        }
    } 
    function validarEmail() {
    var email =document.querySelector("#email").value;
        if (document.querySelector('#email').value.length == 0) {
            alert("Rellena el campo del email");
            return false;
            // if que comprueba que el formato del email es correcto
        }else  if (!(/\S+@\S+\.\S+/.test(email))) {
            alert("email incorrecto.");
        }
        else{
            return true;
        }
    }
       function validarTelefono() {
    
        if (document.querySelector('#telefono').value.length == 0) {
            alert("Rellena el campo del telefono");
            return false;
        }else{
            return true;
        }
    }
      function validarAsunto() {
    
        if (document.querySelector('#asunto').value.length == 0) {
            alert("Rellena el campo del asunto");
            return false;
        }else{
            return true;
        }
    }
