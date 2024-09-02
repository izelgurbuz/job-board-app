import { useQuery } from "@tanstack/react-query";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fetchJobs } from "../api/jobApi";

function JobList() {
  const { data: jobs, isLoading } = useQuery({
    queryFn: () => fetchJobs(),
    queryKey: ["fetchJobs"],
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {jobs?.map((job, index) => (
          <NavLink
            key={index}
            to={`/jobs/${job}`}
            className={({ isActive }) => (isActive ? "text-primary-700" : "")}
          >
            Job {job.title}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default JobList;
