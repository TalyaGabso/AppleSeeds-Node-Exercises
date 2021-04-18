const express = require('express');
const bodyParser = require('body-parser');
const cors =require ('cors');

const app = express();

const port =process.env.PORT || 8000;

const bankRoute = require('./routes/bank.route');
const userRoute = require('./routes/users.route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/bank',bankRoute);
app.use('/api/bank/users',userRoute);


app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports=app;