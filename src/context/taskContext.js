import { createContext, useContext, useState } from 'react';

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TasksProvider = ({ children }) => {
  const [tasks, estTasks] = useState([
    { id: '1', title: 'fisrt task', description: 'first description' },
  ]);

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
