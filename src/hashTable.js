/*
 * Complexity: 시간 복잡도에 대해서 생각해보세요.
 */

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.insertCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var storageCheck = this._storage.get(index);
  var newItem = {};
  newItem[k] = v;
  newItem['next'] = null;

  function findNull(store, key, input) {
    if(store[key]) {
      return store[key] = input[key];
    }
    if(!store['next']) {
      this.insertCount++;
      if(this.insertCount === this._limit - 1) {
        this._limit *= 2;
      }
      return store['next'] = input;
    }
    return findNull(store['next'], key, input);
  }

  findNull = findNull.bind(this);
  if(storageCheck) {
    return findNull(storageCheck, k, newItem);
  } else {
    this.insertCount++;
    if(this.insertCount === this._limit - 1) {
      this._limit *= 2;
    }
    return this._storage.set(index, newItem);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dataStorage = this._storage.get(index);

  function findKey(store, key) {
    if(store[key]) {
      return store[key];
    }
    return findKey(store['next'], key);
  }

  if(dataStorage) {
    if(findKey(dataStorage, k)) {
      return findKey(dataStorage, k);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var dataStorage = this._storage.get(index);

  function changeNext(store, key) {
    if(store['next'][key]) {
      store['next'] = store['next']['next'];
    } else {
      return changeNext(store['next']['next'], key);
    }
  }

  if(dataStorage[k]) {
    this.insertCount--;
    if(this._limit !== 8 && this.insertCount < this._limit / 2) {
      this._limit /= 2;
    }
    if(dataStorage['next']) {
      return dataStorage = dataStorage['next'];
    } else {
      return this._storage.set(index, undefined);
    }
  } else {
    return changeNext(dataStorage, k);
  }
};
