const express=require('express');
const path=require('path')
const hbs=require('hbs')
const geocode= require('./utils/geocode')
const forecast=require('./utils/forecast')


const app=express()
//console.log(__dirname);
//setting paths
const publicDirPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//setting hbs as view engine 
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);
//setting public folder as root directory for browsers
app.use(express.static(publicDirPath));

//routing
app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Aditya Prakash'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Aditya Prakash'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Aditya Prakash',
        helpText:"Hi there!! what help do you need?"
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
        return res.send({error:'Please provide address'});
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        // console.log('Error:',error);
        // console.log('Data:',data);
        //console.log(error);
        //console.log(req.query.address);
        if(error)
            return res.send(error);
            
        forecast(latitude,longitude,(error,data)=>{
            if(error)
                return res.send({error})
             console.log(location);
            res.send({
                forecast:data,
                location:location,
                address:req.query.address
            }) 
        })
            
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'Opps 404 :(',
        name:'Aditya Prakash'
    })
})

app.listen(3000,()=>{
    console.log('Sever running at port 3000!!');
})
