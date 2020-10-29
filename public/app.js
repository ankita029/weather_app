const request = require('request')
const path = require('path')
const express = require('express')
const hbs = require('hbs')
const weather = require('../public/js/weather')

const app = express();
const port = 8000;

//defines engine path
const pathDirectory = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../public/templates/views')
const partialsPath = path.join(__dirname,'../public/templates/partials')
//console.log(pathDirectory)
//console.log(viewsPath)

//setup handlebars and views directory
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(pathDirectory))

app.get('/weather',(req,res)=>{

    if(!req.query.place){
        return res.send({
            error:"Please provide a location"
        })
    }
        weather(req.query.place,(error,data)=>{
            if(error){
                res.send({error})
            }

            res.send({
                "forecast":data,
                "location":req.query.place
        
            })
        })
    // res.render('index',{
    //     title:"Weather",
    //     name:"Ankita swarnkar",
    //     place: req.query.place
    // })
})

app.get('',(req,res)=>{
    res.render('index',{
           title:"Weather",
            name:"Ankita swarnkar"
        })
})
app.get('/about/hbs',(req,res)=>{
    res.render('about',{
        title:"ABOUT PAGE",
        name:"Ankita is a good girl !"
    })
})

app.get('/',(req,res)=>{
    res.send("YOUR /page")
})

app.get('/weather',(req,res)=>{
    res.send('<h1>Weather</h1>')
})

app.listen(port, ()=>{
    console.log('Server is up and running!!')
})

// app.get('/index',(req,res)=>{

// })


