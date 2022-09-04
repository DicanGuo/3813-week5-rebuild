// used for routing
var express = require('express');
var app = express();
// provide http functionality
var http = require('http').Server(app);

app.use(express.static(__dirname + '/www'));
// use bodyparser
app.use(express.json());

// start server listening
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
});

// route for test page
app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/www/test.html');
});
// route for login page
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/www/index.html');
});
// route for account page
app.get('/account', (req, res)=>{
    res.sendFile(__dirname + '/www/account.html');
});

//route for check inputs
app.post('/api/login', (req,res)=>{
    let users = [{'email': 'abc@com.au', 'password': '123'}, {'email': 'abd@com.au', 'password': '123'}, {'email': 'abe@com.au', 'password': '123'}, ]
    if (!req.body) {
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.password = req.body.password;
    customer.valid = false;
    for (let i = 0; i < users.length; i ++){
        if (req.body.email == users[i].email && req.body.password == users[i].password){
            customer.valid = true;
        }
    }
    res.send(customer);
});