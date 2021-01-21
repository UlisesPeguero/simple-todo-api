const express = require('express');
const cors = require('cors');
// routers
const todosRouter = require('./routes/todos');
const listsRouter = require('./routes/lists');
//
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // load .env 

// database connection and setup
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connection to the database was succesful.');
});

// express setup
const PORT = process.env.HTTP_PORT;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// public files
app.use(express.static('public'));

// routers
// app.use('/api', routerApi);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});