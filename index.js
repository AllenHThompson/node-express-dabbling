var express = require('express');
var app = express();


app.get('/', function(request, response){
     console.log("response: ", response);
     response.send('Hello World!');

});

// GET method route
app.get('/', function(request, response){
     response.send('GET request to the homepage');
});

//POST method route
app.post('/', function(request, response) {
     response.send('POST request to the homepage');
});

app.listen(8000, function(){
     console.log('listening on port 8000');
});
