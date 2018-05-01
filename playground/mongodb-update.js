const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err,db) => {

if(err)return console.log('unable to connect to mongodb');    
console.log('connected to mongodb');


db.collection('Todos').findOneAndUpdate(
    {Text: 'Eat lunch'},
    {$set: {completed: true}}, 
    {returOriginal: false} )
.then((result)=>{
    console.log(result);
}, (err)=>{
    console.log(`error ${err}`);

});

//db.close()
})