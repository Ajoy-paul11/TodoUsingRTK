import AddTodo from "./component/AddTodo";
import ListOfTodo from "./component/ListOfTodo";
import { useSelector } from "react-redux";

function App() {
  const allTodos = useSelector((state) => state.todo);
  return (
    <>
      <div className=" min-h-screen flex flex-col pb-4 w-full bg-gray-800">
        <AddTodo />
        <div className=" text-black mt-8">
          <ul>
            {allTodos.map((todo, index) => (
              <li key={todo.id}>
                <ListOfTodo todo={todo} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
