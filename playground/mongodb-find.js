const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err,db) => {

if(err)return console.log('unable to connect to mongodb');    
console.log('connected to mongodb');

db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    console.log('Todos')
    console.log(JSON.stringify(docs,undefined,2))
},
(err)=>{
    console.log('unable to fetch', err)
});


//db.close()
})