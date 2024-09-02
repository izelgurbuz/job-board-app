import axiosInstance from "./axiosInstance";

export interface Job {
  id?: string; // Unique identifier for the job
  title: string; // Title of the job
  company: string; // Company offering the job
  location: string; // Location of the job
  description?: string; // Optional job description
  postedDate?: string; // Optional date when the job was posted
}
export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axiosInstance.get("/api/jobs");
  return response.data;
};

export const createJob = async (jobData: Job) => {
  const response = await axiosInstance.post("/api/jobs", jobData);
  return response.data;
};
