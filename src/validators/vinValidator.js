function validarVIN(vin) {
  if (!/^[A-HJ-NPR-Z0-9]{17}$/i.test(vin)) return false;

  const mapaValores = {
    A: 1,    B: 2,    C: 3,    D: 4,    E: 5,    F: 6,
    G: 7,    H: 8,    J: 1,    K: 2,    L: 3,    M: 4,
    N: 5,    P: 7,    R: 9,    S: 2,    T: 3,    U: 4,
    V: 5,    W: 6,    X: 7,    Y: 8,    Z: 9,    0: 0,
    1: 1,    2: 2,    3: 3,    4: 4,    5: 5,    6: 6,
    7: 7,    8: 8,    9: 9,  };

  // console.log("PASSEI AQUIIIIIIII")
  const pesos = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

  let soma = 0;
  const vinTrated = vin.toUpperCase();

  for (let i = 0; i < 17; i++) {
    const caractere = vinTrated[i];
    const valor = mapaValores[caractere];

    if (valor === undefined) return false;
    soma += valor * pesos[i];
  }

  const resto = soma % 11;

  let digitoVerificador = resto === 10 ? "X" : resto.toString();
  // console.log('Digito Esperado: ',digitoVerificador);
  // console.log('VIN: ',vinTrated[8]);
  

  return vinTrated[8] === digitoVerificador;
}

function VinValidator(button) {
  const vinInput = button.closest('.Types').querySelector('input[type="text"]');
  const vin = vinInput.value.trim();
  const resultado = validarVIN(vin);

  const resultadoDiv = vinInput.closest('.Types').querySelector('.result');
  if (resultado) {
    resultadoDiv.textContent = "VIN válido! ✅";
    resultadoDiv.style.color = "green";
  } else {
    resultadoDiv.textContent = "VIN inválido! ❌";
    resultadoDiv.style.color = "red";
  }
}
