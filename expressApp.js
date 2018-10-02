var express = require('express');
var hbs = require('hbs');

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

app.listen(3000);
console.log('Server is listening at 3000');