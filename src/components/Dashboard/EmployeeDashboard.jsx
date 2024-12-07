import React from "react";
import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="bg-[#1C1C1C] min-h-screen p-10">
      <Header changeUser={props.changeUser} loggedInUserData={props.loggedInUserData} />
      <TaskListNumbers loggedInUserData={props.loggedInUserData} />
      <TaskList loggedInUserData={props.loggedInUserData} />
    </div>
  );
};

export default EmployeeDashboard;
