var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var articles={
 'article-one': {
    title: "Article/Harsha",
    heading: "Article One",
    date:"10th sep,2016",content:`<p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p><p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>`
},
 'article-two':{
          title: "Article/Harsha",
    heading: "Article two",
    date:"13th sep,2016",content:`<p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p><p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>`
    }
  ,  'article-three': {  title: "Article/Harsha",
    heading: "Article three",
    date:"15th sep,2016",content:`<p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p><p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>
        <p>This is my first article and good to see you all and feeling happy but for some days i am feeling some thing different and i am feeling depressed and feel like no bothers about me and i feel like i should have girl friend
        </p>`}
,};
function createTemplate(data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;
var htmltemplate =`
<html>
    <head>
        <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
<link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body><div class = 'container'>
<h1>Good to see you all</h1>
<div>
    <a href = '/'>Home</a>
</div>
<hr/>
<h3>
    ${heading}
</h3>
<div>
    ${date}
    </div>
    <div>
       ${content}
    </div></div>
</body>
</html>


`;
    return htmltemplate;
}
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));

    
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
