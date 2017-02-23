import { Router } from 'express';
import apiUser from './api/user';


const router = Router();

router.use('/api', apiUser);

export default router;