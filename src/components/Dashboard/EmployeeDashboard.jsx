import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedInUserData }) => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen p-10">
      <Header loggedInUserData={loggedInUserData} />
      <TaskListNumbers loggedInUserData={loggedInUserData} />
      <TaskList loggedInUserData={loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
