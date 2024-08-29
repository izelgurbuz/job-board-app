import express from 'express';
import { check } from 'express-validator';
import { createJob, getJobs } from '../controllers/jobController.js';
import auth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post(
  '/',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('description', 'Description is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('location', 'Location is required').not().isEmpty(),
    ],
  ],
  createJob
);

router.get('/', getJobs);

export default router;
