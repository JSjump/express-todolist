var express = require('express');
var todoControllers = require('./controllers/todoControllers');

var app = express();

app.set('view engine','ejs');// 设置模板引擎

// 设置静态文件目录。 
// 静态文件目录用来放置静态资源文件。静态资源文件可以通俗理解为对于不同用户来说，内容都不会变化的文件。
// 比如不同用户访问某网站，他们所接受到的图片，css,js都是一样的，我们称这类文件为静态资源文件。
app.use(express.static(__dirname+'/public')); 


todoControllers(app); // todoControllers对应MVC设计模式中的 c(控制层)  M(数据层):对应数据库链接方面 V(视图层)

app.listen(3000);
console.log('the server starting at 3000 now');