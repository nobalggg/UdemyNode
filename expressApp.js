var express = require('express');
var hbs = require('hbs');
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',() =>{
    return new Date().getFullYear();
})
var app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/staticContent'));

app.use((req,res,next)=>{
    console.log(req.url);
    next();
});


app.get('/about',(request,repsonse)=>{
    repsonse.render('dynamic.hbs');
});

app.get('/',(req,res)=>{
    res.send('Hello Nobal, This app is running well, But do you know what your goal is , Its something bigger than this');
})

app.listen(port);
console.log('Server is listening at '+port);