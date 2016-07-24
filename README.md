[![rethink.js](https://img.shields.io/badge/rethink-js-yellow.svg)](https://github.com/rethinkjs/manifest)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# fm

__fm__ is a framework that doesn't stop you from learning how to program.<br>
It does two handy things modern frameworks do:
1. __custom events__ - listen for and trigger functions with optional data. ( [observer pattern concept](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript) )
2. __state container__ - Save your app data in one convenient store. ( [redux flux pattern concept](http://redux.js.org/) )


__fm__ combines these two concepts into a very minimal API. <br>
The whole project is under 60 lines, so if you don't like it, please change it!
<!--
This was made as part of a tutorial exploring how to build a framework, the point of which is that we should learn to code first and not rely on frameworks as much - let's be programmers, not 'angular people' or 'react people'. __Read it here:__ [Build your own javascript framework!](http://system-art.io/fm) -->

## Installation

```
npm install fmjs
```
## Add it to your project
```
var fm = require('fm')

function callback(el){
  console.log(el)
}
fm('saveThis', callback)
fm('saveThis', 'triggered!!')
```


### `fm('fieldNameExample', newValue)`

__set__ / __update__ the store's 'fieldNameExample' value.
  ```
const currentCakes = ["strawberry", "double chocolate"];
fm('cakes', currentCakes);
  ```
### `fm([fieldNameExample], callback)`

__subscribe__ / __unsubscribe__ to the store's 'fieldNameExample' field, and invoke the callback automatically if the value is changed. The changed value will be passed as the first argument.<br>
Omit the field name and the callback will be called on every fm store value change.<br>
This simple API means that it is impossible to set a function directly as the value of a store field.
```
fm('cats', catCallback)

function catCallback(cats){
  cats.forEach(function(cat){
    console.log(cat)
  })
}
```

### `fm('fieldNameExample')`
__trigger__ - Will trigger callbacks for any observer of that namespace, with the field's current value if it exists.
```
function observingEverything(el) {
  console.log(el)
}
fm(observingEverything)
fm('nonExistentField')
// will trigger, but not return any values as we didn't set a value for that field.
```

### `fm()`

__return everything__ - Will return your current store collection and observers collection.
```
fm()
{ observers: { '123': [ [Function: onchange] ], fm_observe_all: [] },
  store: {
     '123': 'hello again',
     '345': 'jqoejeojqweoij qowiej qwoeijq woeijqwe oiqwje owqeij'
  } 
}
```

##run the test
install mocha
```
npm install mocha -g
```
and then run `mocha` in the project's root directory
