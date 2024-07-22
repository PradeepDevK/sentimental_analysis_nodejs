const express = require('express');
const bodyParser = require('body-parser');
const cors =  require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
const sentimental = require('./src/routes/sentimental');
app.use('/api/sentimental', sentimental);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});