import {Router} from 'express';
const router = Router();

import { getVideos } from '../controllers/VotingAppController';

router.get('/' , getVideos);

export default router;