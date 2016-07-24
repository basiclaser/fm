'use strict'

var fm = (function(options) {
  var observers = {fm_observe_all:[]}
  var store =  {}
  function setField(key, val){
    store[key] = val
    broadcast(key)
  }
  function broadcast(key){
      if(typeof observers[key] !== 'undefined') {
        observers[key].forEach(function(observerCallback){
          observerCallback(store[key])
        })
      }
      if(typeof observers['fm_observe_all'] !== 'undefined') {
        observers['fm_observe_all'].forEach(function(observerCallback){
          observerCallback({key: store[key]})
        })
      }
  }
  function toggleObserver(key, observerCallback){
    if(typeof observers[key] === 'undefined') {
      observers[key] = []
    }
    if(!observers[key].includes(observerCallback)) {
      observers[key].push(observerCallback)
    } else {
      var index = observers[key].indexOf(observerCallback)
      if (index > -1) {
        observers[key].splice(index, 1)
      }
    }
  }
  function removeObserver(key, observer){
    console.log(observers[key].indexOf(observer));
  }
  // this is the API where we check the user arguments to work out what the user wants to do
  return function(arg1, arg2){
    switch (typeof arg1) {
      case 'string':
        if(typeof arg2 === 'function'){
          toggleObserver(arg1, arg2)
        } else if(typeof arg2 === 'undefined'){
          broadcast(arg1)
        } else {
          setField(arg1, arg2)
        }
        break;
      case 'function':
        toggleObserver('fm_observe_all', arg1)
        break;
      default:
        return {
          observers: observers,
          store: store
        }
      break;
    }
  }
})()
module.exports = fm
