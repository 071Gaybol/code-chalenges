function isFibonacci(num) {
  if (num === 0 || num === 1) return true;
  let prev = 0, next = 1, sum = 1;
  
  while (sum < num) {
      sum = prev + next;
      prev = next;
      next = sum;
  }

  return sum === num;
}

let numero = 42; // Valor de entrada para verificar se pertence à sequência de Fibonacci
if (isFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
