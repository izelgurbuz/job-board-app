import React from "react";
import { useParams } from "react-router-dom";

const Job = () => {
  const params = useParams<{ jobId: string }>();
  return <div>Job {params.jobId}</div>;
};

export default Job;
