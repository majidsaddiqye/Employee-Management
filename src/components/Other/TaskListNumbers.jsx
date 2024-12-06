import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex screen mt-10 justify-between gap-5">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#4CAF50]">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#2196F3]">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">In Progress</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#c29a21]">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Overdue</h3>
      </div>

      <div className="rounded-xl py-6 px-9 w-[45%] bg-[#607D8B]">
        <h2 className="text-2xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">Upcoming</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
