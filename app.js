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

    const { error } = validateTT(req.body);
    
    if(error) {
    //400 bad Request
    res.status(400).send(error.details[0].message)
    return;
    }
    
    const tt = {
        id: trial.length +1,
        name: req.body.name
    }
    trial.push(tt);
    res.send(tt);
})

app.put('/node/trial/:id', (req, res) =>{

    const tt =trial.find(c => c.id === parseInt(req.params.id))
    if(!tt) res.status(404).send(" not found")
    //404 not found error
    
    
    const { error } = validateTT(req.body);
    
    if(error) {
    //400 bad Request
    res.status(400).send(error.details[0].message)
    return;
    }

    //Updating Course
    tt.name = req.body.name;

    res.send(tt)



})

function validateTT(tt){
    const schema = {
        name: joi.string().min(3).max(10).required()
    };

    return joi.validate(tt, schema);
}


app.get('/node/trial/:id',(req, res) => {

 
    const tt =trial.find(c => c.id === parseInt(req.params.id))
    if(!tt) res.status(404).send(" not found")
    res.send(tt) 
    

})

// port 
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}....`))

