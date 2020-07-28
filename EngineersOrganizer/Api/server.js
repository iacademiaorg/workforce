if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const department = require('./routes/department');



// app.set('views', __dirname + '/views');
// app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/department', department);


// -----------------------------database----------------------------------

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',error => console.error.error(error));
db.once('open',()=>console.log('connected to mongoose'));

// -----------------------------------------------------------------------




app.listen(process.env.PORT || 3000, () => { console.log('server running on port ' + (process.env.PORT || 3000)) });
