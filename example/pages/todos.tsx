import { gql } from "@urql/core";
import { useQuery } from "urql";
import { Todo, TODO_FRAGMENT } from '../components/Todo';
import { getGetTodosFragmentedData } from '../__generated__/graphql';

const TODOS_QUERY = gql`
  query getTodosFragmented {
    todos {
      ...TodoFields
    }
  }

  ${TODO_FRAGMENT}
`;

function Index() {
  const [res] = useQuery({ query: TODOS_QUERY });
  return (
    <div>
      <h1>Server</h1>
      {res.data.todos.map((todo) => <Todo key={todo.id} {...todo} />)}
    </div>
  );
}

export async function getServerSideProps() {
  return await getGetTodosFragmentedData();
}

export default Index
