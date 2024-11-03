"use client";
import Modal from "@/component/Modal";
import TaskInput from "@/component/TaskInput";
import TodoList from "@/component/TodoList";
import { mockedTasks } from "@/mock/mockedTasks";
import { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState(mockedTasks);

  const handleSaveTask = (tasks) => {
    setTasks(tasks);
  };

  return (
    <div className="bg-gray-100 p-4">
      <button className="btn btn-primary">Button</button>
      <h1 className="text-2xl">Todo List</h1>
      <div className="mt-4"></div>
      <TaskInput tasks={tasks} onSave={handleSaveTask} />
      <Modal />
      <TodoList tasks={tasks} />
    </div>
  );
}
