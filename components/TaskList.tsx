import React from "react";
import prisma from "@/utils/db";
import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { tasksActon } from "@/utils/actions";
const TaskList = async () => {
  const task = await tasksActon()
  if (task.length === 0)
    return <h2 className=" mt-8 font-medium text-lg">No tasks to show...</h2>;

  return (
    <ul className=" mt-8">
      {task.map((task) => (
        <li
          key={task.id}
          className="  flex justify-between items-center mb-4 border border-base-300 rounded-lg shadow-lg py-4 px-6"
        >
          <h2
            className={`text-lg capitalize ${
              task.completed ? "line-through" : ""
            }`}
          >
            {task.content}
          </h2>
          <div className="flex items-center gap-6">
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs">
              edit
            </Link>
            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
