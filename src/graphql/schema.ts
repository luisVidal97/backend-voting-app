import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers';

const typeDfs = `

    type Query {
        hello: String
        candidates: [Candidate]
    }

    type Candidate {
        id: ID
        firstname: String
        lastname: String
        age: Int
        slogan: String
        votes: Int
    }

    type Mutation {
        increaseVote(id: ID): Candidate
        decrementVote(id: ID): Candidate
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDfs,
    resolvers: resolvers
});
