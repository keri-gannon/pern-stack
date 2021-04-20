import { InferGetStaticPropsType } from 'next';

type Todo = {
  description: string;
  id: number;
};

export const getStaticProps = async () => {
  // TODO: Update to env variable
  const res = await fetch('http://localhost:5000/todos');
  const todos: Todo[] = await res.json();

  return {
    props: {
      todos,
    },
  };
};

const Todos = ({ todos }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1>TODOS</h1>
      {todos.map(({ description, id }, index) => (
        <div key={`${description}-${id}-${index}`}>
          <p>{description}</p>
        </div>
      ))}
    </>
  );
};

export default Todos;
