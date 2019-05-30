var {createTodoItem,deleteTodoItem,findTodoItems} = require('../models/todo');// 新建models目录，用于数据库交互。implement(贯彻)MVC思想

var bodyParser = require('body-parser');   // 处理表单提交过来的数据的中间件
var urlencodedParser = bodyParser.urlencoded({extended:false});

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todotest', {useNewUrlParser: true});

module.exports = function(app) {
   app.get('/todo',function(req,res){
    findTodoItems().then(data => {
        res.render('todo.ejs',{todos:data})
    })
        //   res.render('todo.ejs',{todos:findTodoItems()})
   });

   app.post('/todo',urlencodedParser,function(req,res){
        //  data.push(req.body);
        createTodoItem(req.body);
         res.json(data);
   });
   app.delete('/todo/:item',function(req,res){
    deleteTodoItem(req.params.item.replace(/\-/g,' '))
    //    data = data.filter(function(todo){
    //        return todo.item.replace(/ /g,'-') !== req.params.item;
    //    })
       res.json('');
   })
}