import Job from '../models/Job.js';
import { validationResult } from 'express-validator';

export const createJob = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { title, description, company, location } = req.body;

  try {
    const job = new Job({
      title,
      description,
      company,
      location,
      postedBy: req.user.id,
    });

    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
