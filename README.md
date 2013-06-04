## Mongoose Constructor Hook

`mongoose-construct` adds a hook similiar to the init hook, except it's called everytime a model instance is created, whether it's brand new or loaded from the database (whereas the init hook only gets called when you load the object from the database via  find query)

## Installation
`npm install --save mongoose-construct`

## Usage
`````
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , construct = require('mongoose-construct')

var user = new Schema({})
user.plugin(construct)

user.post('construct', function(){
	console.log('Constructor called...')
})

var User = mongoose.model('User', user)
var myUser = new User(); // construct hook will be called
````

