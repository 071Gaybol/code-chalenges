function inverterString(str) {
  let invertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
  }
  return invertida;
}

const stringOriginal = "Exemplo";
const stringInvertida = inverterString(stringOriginal);
console.log("String invertida: ", stringInvertida); 
