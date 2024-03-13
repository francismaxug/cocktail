import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";

const TaskPage = () => {
  return (
    <div className=" max-w-lg">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};
export default TaskPage;
