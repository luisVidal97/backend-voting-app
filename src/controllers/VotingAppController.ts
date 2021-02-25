import { Request, Response } from "express";
import {getRepository} from "typeorm";
import {Candidate} from "../entity/Candidate";

export const getCandidates = async (req: Request, res: Response): Promise<Response>  => {
    const candidates = await getRepository(Candidate).find();
    return res.json({
        candidates
    });
}

export default  {
    getCandidates
}