import "reflect-metadata";
import {createConnection} from "typeorm";
import {Candidate} from "../entity/Candidate";

import * as faker from 'faker';
import { loremIpsum } from "lorem-ipsum";


// db connection
createConnection()
    .then( async (connection) => {
        console.log("successful connection");
        await connection.getRepository(Candidate)
                        .createQueryBuilder()
                        .delete()
                        .execute();

        console.log("removed data...")
                    
        for(let i = 0; i < 20; i++){
            const slogan = loremIpsum({
                sentenceLowerBound: 10,   // Min. number of words per sentence.
                sentenceUpperBound: 10,  // Max. number of words per sentence.
            });
            const votes = Math.floor(Math.random() * 10) + 1;
            const age = Math.floor(Math.random() * 60) + 18;

            await connection.getRepository(Candidate)
                        .createQueryBuilder()
                        .insert()
                        .values({
                            firstname: faker.name.firstName(),
                            lastname: faker.name.lastName(),
                            slogan,
                            votes,
                            age
                        })
                        .execute();
        }

        console.log("added candidates!")

    })
    .catch(error => console.log(error));
