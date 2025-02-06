function validarVIN(vin) {
  // Verifica se o VIN tem 17 caracteres válidos
  if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)) return false;

  const mapaValores = {
      A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
      J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
      S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
      0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };
  const pesos = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  let soma = 0;
  const vinTrated = vin.toUpperCase();

  // Calcular a soma ponderada
  for (let i = 0; i < 17; i++) {
      const caractere = vinTrated[i];
      const valor = mapaValores[caractere];

      if (valor === undefined) return false;

      soma += valor * pesos[i];
  }

  // Calcular o resto da divisão por 11
  const resto = soma % 11;
  
  // Determina o dígito verificador baseado no resto
  let digitoVerificador = (resto === 10) ? 'X' : resto.toString();
  
  console.log("Dígito verificador esperado:", digitoVerificador);
  console.log("Dígito verificador no VIN:", vinTrated[9]);  

  // Verificar se o dígito verificador no VIN corresponde ao calculado
  return vinTrated[9] === digitoVerificador;
}

function validar() {
  const vin = document.getElementById('vinInput').value;
  const resultado = validarVIN(vin);

  const resultadoDiv = document.getElementById('resultado');
  if (resultado) {
      resultadoDiv.textContent = "VIN válido! ✅";
      resultadoDiv.style.color = "green";
  } else {
      resultadoDiv.textContent = "VIN inválido! ❌";
      resultadoDiv.style.color = "red";
  }
}
