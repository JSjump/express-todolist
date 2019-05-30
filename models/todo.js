var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todotest', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('success connect to db');
});
var TodoSchema = new mongoose.Schema({ // schema概要。相当于document的构造函数
    item:String
});
var Todo = mongoose.model('Todo',TodoSchema) // model,相当于document的类 。第一个参数对应数据库的collection

exports.createTodoItem = function (itemContent) {
    var item = new Todo(itemContent);
    item.save(function(err,item){
        if(err) return console.error(err);
        return console.log('success add item');
    });
}

exports.deleteTodoItem = function (name) {
    console.log({item:name})
    Todo.remove({item:name},function(err){
        if(err) return console.error(err);
        return console.log('remove success')
    })
}

exports.findTodoItems = function () {
    return Todo.find({},function(err,data){
        if(err) return console.error(err);
        return data; // 取得数据库数据，返回作为promise的值
    });
}

