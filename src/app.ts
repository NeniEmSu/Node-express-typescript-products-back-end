import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from "body-parser";
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
import path from "path";


const app: Application = express();



mongoose.connect('mongodb+srv://neni:88fAHEm9gteF69Lw@productsdevcluster-u3co4.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to mongodb atlas');
    })
    .catch((error: any) => {
        console.log('unable to connect to mongodb atlas');
        console.error(error);
    });

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;