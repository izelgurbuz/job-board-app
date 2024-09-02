import axiosInstance from './axiosInstance';

export const fetchJobs = async () => {
  const response = await axiosInstance.get('/api/jobs');
  return response.data;
};

export const fetchJobById = async (jobId: string) => {
  const response = await axiosInstance.get(`/api/jobs/${jobId}`);
  return response.data;
};

export const createJob = async (jobData: any) => {
  const response = await axiosInstance.post('/api/jobs', jobData);
  return response.data;
};

export const updateJob = async (jobId: string, jobData: any) => {
  const response = await axiosInstance.put(`/api/jobs/${jobId}`, jobData);
  return response.data;
};

export const deleteJob = async (jobId: string) => {
  const response = await axiosInstance.delete(`/api/jobs/${jobId}`);
  return response.data;
};
