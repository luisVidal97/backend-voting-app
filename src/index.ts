import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import VotingAppRouter from './routes/VotingAppRouter';

const app = express();

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
