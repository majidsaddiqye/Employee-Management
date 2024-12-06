import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";

const AdminDashboard = () => {
  return (
    <div className="w-full h-screen p-7">
      <Header />
      <CreateTask />
    </div>
  );
};
export default AdminDashboard;
