function calcularSoma() {
  let INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
      K = K + 1;
      SOMA = SOMA + K;
  }

  console.log("O valor de SOMA é: ", SOMA);
}

calcularSoma(); // O valor de SOMA será 91
