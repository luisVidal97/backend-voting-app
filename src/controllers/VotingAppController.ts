import { Request, Response } from "express";
import {getRepository} from "typeorm";
import {Candidate} from "../entity/Candidate";

export const getVideos = async (req: Request, res: Response): Promise<Response>  => {
    const candidates = await getRepository(Candidate).find();
    console.log(candidates.length)
    return res.json({
        candidates
    });
}

export default  {
    getVideos
}