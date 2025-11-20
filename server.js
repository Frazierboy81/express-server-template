const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

const PORT = process.env.PORT || 4000;

const app = express();


//===============Middleware==============
app.use(morgan('dev')); //logger
app.use(express.json()); //parse the data

//===============Route===================

app.use('/api/user', require('./routes/userRoutes'));
app.get('/', (req, res) => {
    res.send('Welcome to my API');
});


app.listen(PORT, () => {
    console.log((`Server running on port: ${PORT}`));
    
});