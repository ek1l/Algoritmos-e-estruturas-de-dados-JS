function criarPiramide(numero) {
  for (let i = 1; i <= numero; i++) {
    let linha = '#'.repeat(i);
    console.log(linha);
  }
}

// Substitua 4 pelo número desejado
criarPiramide(100);
