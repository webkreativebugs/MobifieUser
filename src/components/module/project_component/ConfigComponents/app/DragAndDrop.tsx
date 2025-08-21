import React, { useState } from "react";

interface Task {
  id: number;
  task: string;
}

const DragAndDrop: React.FC = () => {
  const initialTodos: Task[] = [
    { id: 1, task: "Write unit tests" },
    { id: 2, task: "Review PR" },
    { id: 3, task: "Fix bugs" },
  ];

  const [todos, setTodos] = useState<Task[]>(initialTodos);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const onDragStart = (event: React.DragEvent<HTMLDivElement>, task: Task) => {
    setDraggedTask(task);
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // allow drop
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (!draggedTask) return;

    setCompletedTasks((prev) => [...prev, draggedTask]);
    setTodos((prev) => prev.filter((t) => t.id !== draggedTask.id));
    setDraggedTask(null);
  };

  return (
    <div className="p-4 flex gap-8">
      {/* Todo List */}
      <div>
        <h2 className="text-lg font-bold mb-2">Todo</h2>
        {todos.map((task) => (
          <div
            key={task.id}
            className="p-2 mb-2 bg-blue-50 rounded cursor-grab"
            draggable
            onDragStart={(e) => onDragStart(e, task)}
          >
            {task.task}
          </div>
        ))}
      </div>

      {/* Completed Tasks */}
      <div>
        <h2 className="text-lg font-bold mb-2">Completed</h2>
        <div
          className="min-h-[100px] p-2 bg-gray-100 rounded"
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          {completedTasks.map((task) => (
            <div key={task.id} className="p-2 mb-2 bg-green-100 rounded">
              {task.task}
            </div>
          ))}
          {completedTasks.length === 0 && (
            <p className="text-gray-500">Drop tasks here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
