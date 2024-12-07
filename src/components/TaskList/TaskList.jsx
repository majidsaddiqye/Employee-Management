import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ loggedInUserData }) => {
  return (
    <div className="bg-[#1c1c1c] h-screen w-full flex flex-wrap gap-5 py-5 mt-10 justify-start items-start">
      {loggedInUserData.tasks.map((elem, id) => {
        if (elem.active) {
          return <AcceptTask key={id} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={id} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={id} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={id} data={elem} />;
        }
      })}
    </div>
  );
};

export default TaskList;
