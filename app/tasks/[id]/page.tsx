import EditForm from "@/components/EditForm";
import { getTast } from "@/utils/actions";
import Link from "next/link";
import React from "react";

const SingleTask = async ({ params }: Params) => {
  const task = await getTast(params.id);
  return (
    <>
      <div className=" mb-16">
        <Link href="/tasks" className=" btn btn-accent">
          back to tassk
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTask;
