import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello to blog API');
})

const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.tuc2r.mongodb.net/blogDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

//useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are no longer supported options. 
//Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, and useFindAndModify is false. 
//Please remove these options from your code.
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
