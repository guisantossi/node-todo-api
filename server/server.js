var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());
//ADD TODO
app.post('/AddTodos', (req,res)=> {
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=> {
    res.send(doc);
  },(e)=>{res.status(400).send(e);});
});
//ADD USER
app.post('/AddUsers',(req,res)=>{
  var user = new User({
    email : req.body.email
  });
  user.save().then((doc)=>{
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
