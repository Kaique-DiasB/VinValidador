function RegexValidador(vin){
    // const regex = /^(?!0)(?!.*\s)(?!.*([0-9A-Z])\1{5,})(?!.*[iIoOqQ])[0-9A-Z]{13}\d{4}$/;
    // Não necessariamente é uma regra, olhei ate mesmo em nossa base e possui clientes com inicio 0
    const regex = /^(?!.*\s)(?!.*([0-9A-Z])\1{5,})(?!.*[iIoOqQ])[0-9A-Z]{13}\d{4}$/;

    return regex.test(vin);
   
}

function validarVinRegex(button) {
    const vinInput = button.closest('.Types').querySelector('input[type="text"]');
    const vin = vinInput.value.trim(); 

    const resultado = RegexValidador(vin);
  
    const resultadoDiv = vinInput.closest('.Types').querySelector('.result');
    if (resultado) {
      resultadoDiv.textContent = "VIN válido! ✅";
      resultadoDiv.style.color = "green";
    } else {
      resultadoDiv.textContent = "VIN inválido! ❌";
      resultadoDiv.style.color = "red";
    }
  }
  
