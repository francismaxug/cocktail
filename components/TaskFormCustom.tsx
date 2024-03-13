"use client";
import { createTaskCustom } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
// import { toast } from "react-toastify";
const initailState: Initail = {
  message: null,
};
const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className=" btn btn-primary join-item"
    >
      {pending ? "please wait..." : "Create Task"}
    </button>
  );
};
const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initailState);
  // useEffect(() => {
  //   if (state.message === "error") toast.error("an error occured");
  //   if (state.message === "success") toast.success("Task created");
  // }, [state.message]);

  console.log(state);
  return (
    <form action={formAction}>
      {state.message ? <p>{state.message}</p> : null}
      <div className=" join w-full">
        <input
          type="text"
          className=" input input-bordered join-item w-full"
          name="content"
          required
          placeholder="type here"
          id=""
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
