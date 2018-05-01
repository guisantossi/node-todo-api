const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err,db) => {

if(err)return console.log('unable to connect to mongodb');    
console.log('connected to mongodb');

//delete many
// db.collection('Todos').deleteMany({text: 'Eat'}).then((result)=>{
//     console.log(result);

// },(err)=> {console.log(`error ${err}`);});

//delete one
// db.collection('Todos').deleteOne({text: 'Eat'}).then((result)=>{
//     console.log(result);
// },(err)=> {console.log(`error ${err}`);});

//findondeAndDelete
// db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
//     console.log(result);
// },(err)=> {console.log(`error ${err}`);});


db.collection('Users').deleteMany({location: 'Brazil'}).then((result)=>{
    console.log(result);
},(err)=> {console.log(`error ${err}`);});

db.collection('Users').findOneAndDelete({User: 'Gabriel'}).then((result)=>{
    console.log(result);
}, (err)=>{
    console.log(`error ${err}`);

});

//db.close()
})