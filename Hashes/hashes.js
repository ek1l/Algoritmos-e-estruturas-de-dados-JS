function Dicionary() {
  var items = {};

  this.set = function (key, value) {
    // Adiciona um novo item ao dicionário
    items[key] = value;
  };

  this.delete = function (key) {
    // Remove o valor do dicionário usando a chave
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.has = function (key) {
    // Verifica se a chave existe e retorna um booleano
    return items.hasOwnProperty(key);
  };

  this.get = function (key) {
    // Devolve um valor específico a partir da chave
    return this.has(key) ? items[key] : undefined;
  };

  this.clear = function () {
    // Remove todos os items do dicionário
    items = {};
  };

  this.size = function () {
    // retorna a quantidade de elementos contidos no dicionário
    return Object.keys(items).length;
  };

  this.keys = function () {
    // Devolve um array com todas as chaves do dicionário
    return Object.keys(items);
  };

  this.values = function () {
    // Devolve um array com todos os valores do dicionário
    var values = [],
      keys = Object.keys(items);

    for (var i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  this.getItems = function () {
    return items;
  };
}

function HashTable() {
  var table = [];

  this.put = function (key, value) {
    // Insere elemento
    var position = losoloseHashCode(key);
    console.log(position + ' ' + key);
    table[position] = value;
  };

  this.remove = function (key) {
    // Remove elemento
    table[losoloseHashCode(key)] = undefined;
  };

  this.get = function (key) {
    // Retorna um valor
    return table[losoloseHashCode(key)];
  };

  var losoloseHashCode = function (key) {
    // Retorna hash (valor numérico)
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };
}

var hash = new HashTable();

hash.put('Gandalf', 'gandalf@gmail.com ');
hash.put('Leonardo', 'leonardo@gmail.com');
hash.put('Ana', 'ana@gmail.com');
 
console.log(hash.get('Gandalf'));
