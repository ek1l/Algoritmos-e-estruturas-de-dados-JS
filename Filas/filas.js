function Queue() {
  var items = [];

  this.enqueue = function (element) {
    // Adiciona um novo items
    items.push(element);
  };

  this.dequeue = function () {
    // Remover um item
    return items.shift();
  };

  this.front = function () {
    // Retorna o primeiro elemento da fila
    return items[0];
  };

  this.isEmpty = function () {
    // Verifica se a fila está vazia ou não
    return items.length === 0;
  };

  this.size = function () {
    // Retorna o tamanho da fila
    return items.element;
  };

  this.print = function () {
    // Imprimir a fila no console
    console.log(items.toString());
  };
}

// Jogo da batata quente 

function hotPotato(namelist, num) {
  var queue = new Queue();
  for (var i = 0; i < namelist.length; i++) {
    queue.enqueue(namelist[i]);
  }
  var eliminated = '';
  while (queue.size() > 1) {
    for (var i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + 'was eliminated from the Hot Potato game');
  }
  return queue.dequeue();
}

var names = ['João', 'José', 'Maria', 'Ana', 'Lucas'];
var winner = hotPotato(names, 7);
console.log('The winner is: ' + winner);

// Fila prioritária
function PriorityQueue() {
  var items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    var queueElement = new QueueElement(element, priority);
    var added = false;
    for (var i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      items.push(queueElement);
    }
  };

  this.dequeue = function () {
    return items.shift();
  };

  this.print = function () {
    for (var i = 0; i < items.length; i++) {
      console.log(items[i].element + ' ' + items[i].priority);
    }
  };
}
