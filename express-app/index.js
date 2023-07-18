const express=require('express');//return function
const app = express();

// app.use((req,res)=>{
//     // console.log(req);
//     // console.log("you have made something bitching you dick!")
//     res.send("<h1>you made a request successfully and here is the response </h1>")

// })  
// these are called routing endpoints
// here we would URL routing and method
// now i know what are request methods and 
app.get('/cat',(req,res)=>{
    res.send('<h1>this is a cat</h1>')
})
// this method is simply used to create views and url routing functionality 
app.get('/dog',(req,res)=>{
    res.send('<h1>this is a dog</h1>')
})
app.get('/user',(req,res)=>{
    res.send('<h1>this is a user</h1>');
})
app.get('/',(req,res)=>{
    res.send('<h1>this is home</h1>')
})

// methods used in routing
// params and query 
app.get('/q/:name',(req,res)=>{
    const sub = req.params['name'];
    console.log(sub);
    res.send('<h1>this request is made for the '+sub+"</h1>"); 
})
// query params
app.get('/search',(req,res)=>{
    const { re }=req.query;
    console.log(re)
    res.send(`YOU ARE TRYING TO SEARCH ${re}`)
})
app.get('/q/:sea',(req,res)=>{
    console.log(req.query)
    const sub = req.params['sea'];
    console.log(sub);
    res.send('<h1>this seach is made for the '+sub+"</h1>"); 
})
//  
app.get('*',(req,res)=>{
    res.send('404 Does not exist!!!') 
})
   









// console.log(app)
app.listen(8000,(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("the server is working at "+8000);
})