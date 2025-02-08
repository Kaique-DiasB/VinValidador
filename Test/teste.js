const vinValidator = require('./vinValidator');

const vin = '9C2KC1640AR014340'; // VIN válido
if (vinValidator.validate(vin)) {
  console.log('VIN válido!');
} else {
  console.log('VIN inválido!');
}