import express from 'express';
import generateHint from '../controllers/openai.controller.js'

const router = express.Router();

router.post('/hint', generateHint );

export default router;
