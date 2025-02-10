function SimpleValidator(vin) {
    if (vin.length !== 17) {
      return false;
    }
    if (/[IOQ]/i.test(vin)) {
      return false;
    }
    if (RepeatedCharacters(vin)) {
      return false;
    }
    return true;
  }
  
  function RepeatedCharacters(str) {
    const seen = {};
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (seen[char]) {
        return true;
      }
      seen[char] = true;
    }
    return false;
  }

function validarSimpleVin(button) {
  const vinInput = button.closest(".Types").querySelector('input[type="text"]');
  const vin = vinInput.value.trim();
  const resultado = SimpleValidator(vin);
  console.log(resultado);

  const resultadoDiv = vinInput.closest(".Types").querySelector(".result");
  if (resultado) {
    resultadoDiv.textContent = "VIN válido! ✅";
    resultadoDiv.style.color = "green";
  } else {
    resultadoDiv.textContent = "VIN inválido! ❌";
    resultadoDiv.style.color = "red";
  }
}


// Corrigir amanha