// Função para carregar o arquivo JSON
async function carregarFaturamento() {
  try {
      const response = await fetch('faturamento.json');
      const faturamentoMensal = await response.json();
      return faturamentoMensal;
  } catch (error) {
      console.error('Erro ao carregar o JSON:', error);
  }
}

// Função para analisar o faturamento
function analisarFaturamento(faturamento) {
  let min = Infinity;
  let max = -Infinity;
  let soma = 0;
  let diasComFaturamento = 0;

  for (let dia of faturamento) {
      let valor = dia.valor;
      if (valor > 0) {
          if (valor < min) min = valor;
          if (valor > max) max = valor;
          soma += valor;
          diasComFaturamento++;
      }
  }

  const mediaMensal = soma / diasComFaturamento;
  let diasAcimaDaMedia = 0;

  for (let dia of faturamento) {
      if (dia.valor > mediaMensal) diasAcimaDaMedia++;
  }

  return { min, max, mediaMensal, diasAcimaDaMedia };
}

// Carregar e processar os dados do JSON
carregarFaturamento().then(faturamentoMensal => {
  if (faturamentoMensal) {
      const resultado = analisarFaturamento(faturamentoMensal);
      console.log("Menor valor de faturamento:", resultado.min);
      console.log("Maior valor de faturamento:", resultado.max);
      console.log("Média mensal:", resultado.mediaMensal);
      console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
  }
});
