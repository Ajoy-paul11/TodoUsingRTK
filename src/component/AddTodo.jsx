import React from "react";
import { addTodo } from "../store/slices/todoSlice.jsx";
import { useDispatch } from "react-redux";

function AddTodo() {
  const [todo, setTodo] = React.useState("");
  const dispatch = useDispatch();

  const handleTodo = (e) => {
    e.preventDefault();
    if (todo === "") return;
    dispatch(addTodo({ id: Date.now(), todo, toggleComplete: false }));
    setTodo("");
  };

  return (
    <div className="">
      <div className=" py-6 text-center font-bold text-2xl lg:text-4xl text-slate-300">
        <h2>List your daily Todo</h2>
      </div>
      <form onSubmit={handleTodo}>
        <div className=" w-full flex justify-center">
          <div className="w-[90%] lg:w-[60%] flex items-center">
            <input
              type="text"
              className="bg-gray-50 text-gray-300 text-xl rounded-l-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-700 border-none duration-300"
              placeholder="Add your Todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="text-gray-700 text-lg lg:text-xl bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-r-lg  px-5 py-2.5   duration-300"
            >
              Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
