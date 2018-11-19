/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var LinkedList = function() {
  var list = {};
  list.head = new Node();
  list.tail = new Node();

  list.addToTail = function(value) {
    function findNull(item, input) {
      if(!item.next) {
        return item.next = input;
      }
      return findNull(item.next, input);
    }

    if(!list.head.value) {
      list.head.value = value;
      list.tail.value = value;
    } else {
      findNull(list.head, new Node(value));
      list.tail = new Node(value);
    }

    return list.tail;
  };

  list.removeHead = function() {
    var removedValue = list.head.value;
    list.head = list.head.next;

    return removedValue;
  };

  list.contains = function(target) {
    function findValue(item, value) {
      if(item.value === value) {
        return true;
      } else {
        if(!item.next) {
          return false
        } else {
          return findValue(item.next, target);
        }
      }
    }
    
    return findValue(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
