const express = require('express');
const app = express();


const trial_array = [

    { id : 1, name: 'maths'},
    { id : 2, name: 'scince'},
    { id : 3, name: 'Physics'},
    { id : 4, name: 'Chemistry'},
];

app.get('/',(req, res) =>{

    res.send(' response of the super request')

});

app.get('/node/trial_array',(req, res) => {

    //res.send([1,2,3,4,5])
    res.send(req.params.id) 

})

app.get('/node/trial_array/:id',(req, res) => {

    res.send(req.params) 

})

// port 
const port = process.env.PORT || 3000;
app.listen(port,() => console.log(`listening on port ${port}....`))

