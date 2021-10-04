import { createContext, useContext } from 'react';

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  return context;
};

export const TasksProvider = ({ children }) => {
  let hello = 'world';

  const greet = (name) => `Hello ${name}`;

  return (
    <TaskContext.Provider value={{ hello, greet }}>
      {children}
    </TaskContext.Provider>
  );
};
