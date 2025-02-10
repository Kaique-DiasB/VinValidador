function RegexValidadorObject(vin) {
    const RegexValidador = {
        trimVin: function(vin) {
            return /\s/.test(vin);
        },

        repeatMoreSixAfterFour: function(vin) {
            return /^.{3,}([0-9A-Z])\1{5,}/.test(vin);
        },

        banCharacters: function(vin) {
            return /[iIoOqQ]/.test(vin);
        },

        fourLast: function(vin) {
            return !/\d{4}$/.test(vin);
        },

        length: function(vin) {
            return !/^[0-9A-Z]{17}$/.test(vin);
        }
    };

    return !Object.values(RegexValidador).some(fn => fn(vin));
}


function validarVinRegexObject(button) {
    const vinInput = button.closest('.Types').querySelector('input[type="text"]');
    const resultado = RegexValidadorObject(vinInput.value);
    console.log(resultado)
  
    const resultadoDiv = vinInput.closest('.Types').querySelector('.result');
    if (resultado) {
      resultadoDiv.textContent = "VIN válido! ✅";
      resultadoDiv.style.color = "green";
    } else {
      resultadoDiv.textContent = "VIN inválido! ❌";
      resultadoDiv.style.color = "red";
    }
  }
  
// firstOneZero: function(vin){
        //     return /^0/.test(vin);
        // }, Não necessariamente é uma regra, olhei ate mesmo em nossa base e possui clientes com inicio 0
