const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/usarioCliente');
const usuarioClienteRoute = require('./routes/usarioCliente');
const errorController = require('./controllers/error')

//initializations
const app = express();


//setting
app.set('port',process.env.PORT || 4000);


app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/usuarioCliente',usuarioClienteRoute);

app.use(errorController.get404);
app.use(errorController.get500);


//Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port',app.get('port'));
});
