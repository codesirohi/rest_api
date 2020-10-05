const joi =require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const trial = [

    { id : 1, name: 'maths'},
    { id : 2, name: 'scince'},
    { id : 3, name: 'Physics'},
    { id : 4, name: 'Chemistry'}
];

app.get('/',(req, res) =>{

    res.send(' response of the super request')

});

app.get('/node/trial',(req, res) => {

    res.send(trial) 

});

app.post('/node/trial',(req, res) =>{

    const schema = {
        name: joi.string().min(3).max(10).required()
    };

    const result = joi.validate(req.body, schema);
    

   
    if(result.error) {
//        //400 bad Request
        res.status(400).send(result.error.body)
        return;
    }
    const tt = {
        id: trial.length +1,
        name: req.body.name
    }
    trial.push(tt);
    res.send(tt);
})



app.get('/node/trial/:id',(req, res) => {

 
    const tt =trial.find(c => c.id === parseInt(req.params.id))
    if(!tt) res.status(404).send(" not found")
    res.send(tt) 
    

})

// port 
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}....`))

