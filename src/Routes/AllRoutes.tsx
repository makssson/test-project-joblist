import React from "react";
import { Routes, Route } from "react-router-dom";
import JobPage from "../components/pages/JobPage/JobPage";
import JobsBoard from "../components/pages/JobsBoard/JobsBoard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/test-project-joblist" element={<JobsBoard />} />
      <Route path="/jobpage/:id" element={<JobPage />} />
    </Routes>
  );
};

export default AllRoutes;
