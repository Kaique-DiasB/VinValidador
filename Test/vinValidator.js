const vinValidator = {
    validate: function (vin) {
      // Verifica se o VIN tem 17 caracteres
      if (vin.length !== 17) {
        return false;
      }
  
      // Converte o VIN para maiúsculas (case-insensitive)
      vin = vin.toUpperCase();
  
      // Verifica se o VIN contém apenas caracteres válidos (números e letras, exceto I, O, Q)
      const caracteresValidos = "0123456789ABCDEFGHJKLMNPRSTUVWXYZ";
      for (let char of vin) {
        if (!caracteresValidos.includes(char)) {
          return false;
        }
      }
  
      // Cálculo do dígito verificador (9ª posição)
      const valores = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
        'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'P': 7, 'R': 9, 'S': 2,
        'T': 3, 'U': 4, 'V': 5, 'W': 6, 'X': 7, 'Y': 8, 'Z': 9,
        '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
        '8': 8, '9': 9
      };
  
      const pesos = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  
      let soma = 0;
      for (let i = 0; i < vin.length; i++) {
        soma += valores[vin[i]] * pesos[i];
      }
  
      const digitoVerificador = soma % 11;
      const digitoEsperado = digitoVerificador === 10 ? 'X' : digitoVerificador.toString();
      console.log(vin[8], "essamerdinha");
      console.log(digitoEsperado)

      // Verifica se o dígito verificador está correto
      if (vin[8] !== digitoEsperado) {
        return false;
        
      }
  
      return true;
    }
  };
  
  module.exports = vinValidator;