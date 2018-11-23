/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(!list.head) {
      list.head = new Node(value);
      list.tail = new Node(value);
    } else {
      var checkNode = list.head;
      list.tail = new Node(value);
      while(checkNode) {
        if(!checkNode.next) {
          checkNode.next = new Node(value);
          break;
        } else {
          checkNode = checkNode.next;
        }
      }
    }
  };

  list.removeHead = function() {
    var removedValue = list.head.value;
    list.head = list.head.next;

    return removedValue;
  };

  list.contains = function(target) {
    var checkNode = list.head;
    while(checkNode) {
      if(checkNode.value === target) {
        return true;
      } else {
        checkNode = checkNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
