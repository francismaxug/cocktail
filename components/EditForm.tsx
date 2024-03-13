"use client";
import { ediTast } from "@/utils/actions";
import React from "react";

const EditForm = ({ task }: { task: Tasks[] }) => {
  const dis = task[0];
  const { id, content, completed } = dis;
  return (
    <form
      action={ediTast}
      className=" max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className=" input input-bordered w-full"
      />
      <div className=" form-control my-4">
        <label htmlFor="completed" className=" label cursor-pointor">
          <span className=" label-text">completed</span>
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            className=" checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className=" btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
};

export default EditForm;
