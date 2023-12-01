// Listas Duplamente Ligadas (DOUBLE LINKED LISTS)

function DoublyLinkedList() {
  var Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  var length = 0;
  var head = null;
  var tail = null;

  this.append = function (element) {
    // Adiciona um elemento no final da lista
    var node = new Node(element),
      current;
    tail = node;
    if (head === null) {
      head = node;
    } else {
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      tail = node;
    }
    length++;
  };

  this.insert = function (position, element) {
    // DLL
    if (position >= 0 && position <= length) {
      var node = new Node(element);
      var current = head;
      var index = 0;
      var previous;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;
          head = node;
        }
      } else if (position === length) {
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    // DLL
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
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
