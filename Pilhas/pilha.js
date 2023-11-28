// PILHA LIFO: Último que entra é o primeiro que sai.

function Stack() {
  var items = [];

  this.push = function (element) {
    // Adiciona um novo ítem à pilha
    items.push(element);
  };

  this.pop = function () {
    // Remove o item do topo da pilha
    return items.pop();
  };

  this.peek = function () {
    // Devolve o elemento que está no topo da pilha
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    // Informar se a pilha está vazia ou não
    return items.length === 0;
  };

  this.clear = function () {
    // Limpa a pilha
    items = [];
  };

  this.size = function () {
    // Informar o tamanhoi da pilha
    return items.length;
  };

  this.print = function () {
    // Imprime a pilha no console
    console.log(items.toString());
  };
}

var pilha = new Stack();

// Função que transforma decimal para binário
function dec2Bin(decNumber) {
  var restStack = [];
  var rest,
    binaryString = '';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest); //[1]
    decNumber = Math.floor(decNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

console.log(dec2Bin(23));

// Função que transforma decimal para qualquer base

function baseConverter(decNumber, base) {
  var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % base);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / base);
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(50, 2));
