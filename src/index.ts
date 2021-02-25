import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';

import VotingAppRouter from './routes/VotingAppRouter';

import "reflect-metadata";
import {createConnection} from "typeorm";


const app = express();

// db connection
createConnection()
    .then( () => {
        console.log("successful connection");
    })
    .catch(error => console.log(error));
    

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));
app.use(VotingAppRouter);


app.listen( 3001, () => {
    console.log("server on port 3001")
});
