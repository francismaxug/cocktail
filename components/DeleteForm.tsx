"use client";
import React, { useEffect } from "react";
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";
// import { toast } from "react-toastify";

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  // useEffect(() =>{
  //   if (!pending) toast.success("deleted");
  // },[pending])
 
  return (
    <button disabled={pending} className=" btn btn-xs btn-error">
      {pending ? "wait" : "delete"}
    </button>
  );
};
const DeleteForm = ({ id }: { id: string }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <DeleteBtn />
    </form>
  );
};

export default DeleteForm;
