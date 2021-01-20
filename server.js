const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // load .env 

const PORT = process.env.HTTP_PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// public files
app.use(express.static('public'));

// app.use('/api', routerApi);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});