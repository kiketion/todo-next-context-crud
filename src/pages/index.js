import { useTasks } from '../context/taskContext';

const Home = () => {
  const { hello, greet } = useTasks();

  return <div>Hello World</div>;
};

export default Home;
