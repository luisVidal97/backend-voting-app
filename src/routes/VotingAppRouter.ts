import {Router} from 'express';
const router = Router();

import { getCandidates } from '../controllers/VotingAppController';

router.get('/api/getCandidates' , getCandidates);

export default router;