import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function JobList() {
  const jobs = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        {jobs.map((job) => (
          <NavLink
            key={job}
            to={`/jobs/${job}`}
            className={({ isActive }) => (isActive ? "text-primary-700" : "")}
          >
            Job {job}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default JobList;
