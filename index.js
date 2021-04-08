const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 9177;
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'client/build')));
app.use('/api/', (_,res) => {
    res.json({data: 'API is PUSHIN'})
});

app.listen(port, () =>{
    console.log(`The princess is here at port ${port}`);
});

// console.log('The Princess has been found');
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
