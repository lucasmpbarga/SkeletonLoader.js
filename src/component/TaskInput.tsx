import { useState } from "react";

import { Task } from "./TodoList";

type TaskInputProps = {
  tasks: Task[];
  onSave: (updatedTasks: Task[]) => void;
};

const TaskInput = ({ tasks, onSave }: TaskInputProps) => {
  const [newTask, setNewTask] = useState("");

  const handleSaveTask = () => {
    if (!newTask) {
      return;
    }

    const updatedTasks = [
      ...tasks,
      { id: tasks.length + 1, description: newTask },
    ];

    onSave(updatedTasks);
  };

  return (
    <section className="flex flex-row">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(event) => setNewTask(event.target.value)}
      />
      <button className="btn btn-primary ml-2" onClick={handleSaveTask}>
        Save
      </button>
    </section>
  );
};

export default TaskInput;
