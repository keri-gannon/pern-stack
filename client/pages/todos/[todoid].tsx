import { useRouter } from 'next/router';

const Todo = () => {
  const {
    query: { todoid },
  } = useRouter();

  return <div>to do:{todoid}</div>;
};

export default Todo;
