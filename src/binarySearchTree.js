/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTree);

  newTree.value = value;

  return newTree;
};

var binaryTree = {};

binaryTree.insert = function(value) {
  if(this.value > value) {
    if(!this.left) {
      var tree = BinarySearchTree(value);
      return this.left = tree;
    } else {
      return this.left.insert(value);
    }
  }
  if(this.value < value) {
    if(!this.right) {
      var tree = BinarySearchTree(value);
      return this.right = tree;
    } else {
      return this.right.insert(value);
    }
  }
};

binaryTree.contains = function(value) {
  if(this.value === value) {
    return true;
  } else {
    if(this.value > value) {
      if(!this.left) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }
    if(this.value < value) {
      if(!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }
};

binaryTree.depthFirstLog = function(callback) {
  if(this.value) {
    callback(this.value);
  }
  if(this.left) {
    this.left.depthFirstLog(callback);
  }
  if(this.right) {
    this.right.depthFirstLog(callback);
  }
};
