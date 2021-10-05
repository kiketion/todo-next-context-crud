import { useTasks } from '../context/taskContext';

const Home = () => {
  const { tasks } = useTasks();
  console.log(tasks);

  return <div>Hello World</div>;
};

export default Home;
