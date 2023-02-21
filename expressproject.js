const express = require('express');

const app = express();

app.get('/', function(request, response){
    console.log('Hello World');
    response.send("Hello World");
})

app.get('/alien', function(request, response){

    const id = request.query.id;
    response.send("Welcome Back Avirup Dutta "+id);
})

app.get('/alien/:id', function(request,response){
    const id=request.params.id;
    response.send("Hi Avirup Dutta. The id is = " + id);

})

app.listen(9200, function(request,response){
    console.log('Running...')
});