const express = require('express');
const app = express();

app.route('/').get((req, res)=>{
    res.write('<h1>Hello World!!</h1>');
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is up and running on ${port}`));