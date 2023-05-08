const lodash = require(`lodash`);
const {letras, numeros, array} = require(`./array`);

console.log(`antes do lodash.uniq`, array);

const arrayFiltrado = lodash.uniq(array);

console.log(`depois do lodash.uniq`, arrayFiltrado);

console.log(letras, numeros);