import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import VotingAppRouter from './routes/VotingAppRouter';

import "reflect-metadata";
import {createConnection} from "typeorm";


const app = express();

// db connection
createConnection()
    .then( connection => {
        console.log("successful connection");
    })
    .catch(error => console.log(error));
    

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(VotingAppRouter);


app.listen( 3001, () => {
    console.log("server on port 3001")
});
