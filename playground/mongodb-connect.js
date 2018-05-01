const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err,db) => {

if(err)return console.log('unable to connect to mongodb');    

console.log('connected to mongodb');

// db.collection('Todos').insertOne({
// text: 'some todo',
// completed: false
// }, (err,result) => {
// if(err){ return console.log('unable to instert the todo')}
// console.log(JSON.stringify(result.ops,undefined,2))
// })

db.collection('Users').insertOne({User: 'Guilherme', age: 22, location: 'Brazil'}, (err,result)=> {
if(err){return console.log('error during the user insert')}
console.log(JSON.stringify(result.ops,undefined,2));
})

db.close()
})