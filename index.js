const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 9177;


app.use('/api/', (_,res) => {
    res.json({data: 'API is PUSHIN'})
})

app.listen(port, () =>{
    console.log(`The princess is here at port ${port}`);
});

// console.log('The Princess has been found');
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
