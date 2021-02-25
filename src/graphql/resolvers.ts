import {getRepository} from "typeorm";
import {Candidate} from "../entity/Candidate";

export const resolvers = {
    Query: {
        hello: () => {
            return "Hello world!";
        },
        candidates: async () => {
            return await getRepository(Candidate).find();
        }
    },
    Mutation: {

        increaseVote: async (_:any, { id }:any ) => {
            const candidate: any = await getRepository(Candidate).findOne(id) ;
            if (candidate && candidate.votes < 20){
                candidate.votes++;
                await getRepository(Candidate).merge(candidate, {votes: candidate.votes});
                return await getRepository(Candidate).save(candidate);
            }
            return null;
        },

        decrementVote: async (_:any, { id }:any ) => {
            const candidate: any = await getRepository(Candidate).findOne(id) ;
            if (candidate && candidate.votes > 0){
                candidate.votes--;
                await getRepository(Candidate).merge(candidate, {votes: candidate.votes});
                return await getRepository(Candidate).save(candidate);
            }
            return null;
        },
    }
}