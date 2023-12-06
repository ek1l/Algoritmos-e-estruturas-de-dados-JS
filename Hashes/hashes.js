function LinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  var length = 0;
  var head = null;

  this.append = function (element) {
    // Adiciona um elemento no final da lista

    var node = new Node(element),
      current;

    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    // Adiciona um elemento em uma posição específica
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // Remove o elemento de uma posição expecífica
    if ((position > -1) & (position < length)) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };

  this.remove = function (element) {
    // Remove o elemento element
    var index = this.indexOf(element);
    return this.removeAt(index);
  };

  this.indexOf = function (element) {
    // Retorna a posição do elemento
    var current = head,
      index = 0;

    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };

  this.isEmpty = function () {
    // Retorna se está vazia ou não a instância
    return length === 0;
  };

  this.size = function () {
    // Retorna o tamanho da instância
    return length;
  };

  this.getHead = function () {
    return head;
  };

  this.toString = function () {
    // Converte em string
    var current = head,
      string = '';

    while (current) {
      string += current.element + ' ';
      current = current.next;
    }

    return string;
  };

  this.print = function () {
    // Imprime no console
    console.log(this.toString());
  };
}

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

  var valuePair = function (key, value) {
    this.key = key;
    this.value = value;
    this.toString = function () {
      return '[' + this.key + ' - ' + this.value + ']';
    };
  };

  // this.put = function (key, value) {
  //   // Insere elemento
  //   var position = losoloseHashCode(key);
  //   console.log(position + ' ' + key);
  //   table[position] = value;
  // };

  this.put = function (key, value) {
    // Insere elemento
    var position = losoloseHashCode(key);
    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new valuePair(key, value));
  };

  // this.remove = function (key) {
  //   // Remove elemento
  //   table[losoloseHashCode(key)] = undefined;
  // };

  this.remove = function (key) {
    // Remove elemento
    var position = losoloseHashCode(key);
    if (table[position] != undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  };

  // this.get = function (key) {
  //   // Retorna um valor
  //   return table[losoloseHashCode(key)];
  // };

  this.get = function (key) {
    // Retorna um valor
    var position = losoloseHashCode(key);
    if (table[position] != undefined) {
      var current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  };

  var losoloseHashCode = function (key) {
    // Retorna hash (valor numérico)
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  this.print = function () {
    for (var i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ' : ' + table[i]);
      }
    }
  };
}
