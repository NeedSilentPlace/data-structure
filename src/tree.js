/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var obj = Tree(value);
  this.children.push(obj);
};

treeMethods.contains = function(target) {
  if(this.value === target) {
    return true;
  }
  if(this.children.length) {
    for(var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)) {
        return true;
      }
    }
  }

  return false;
};
