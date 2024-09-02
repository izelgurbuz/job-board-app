import axios from 'axios';

// Function to fetch jobs
export const fetchJobs = async (token: string | null) => {
  const response = await axios.get('/api/jobs', {
    headers: {
      Authorization: `Bearer ${token}`, // Sending token in Authorization header
    },
  });
  return response.data;
};
