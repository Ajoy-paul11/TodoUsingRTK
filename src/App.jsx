import React, { useEffect, useState } from "react";
import AddTodo from "./component/AddTodo";
import ListOfTodo from "./component/ListOfTodo";
import { useSelector, useDispatch } from "react-redux";
import { setTodos } from "./store/slices/todoSlice.jsx";

function App() {
  const dispatch = useDispatch();
  const allTodos = useSelector((state) => state.todo);

  useEffect(() => {
    const storedTodos = localStorage.getItem("Todos");
    console.log("Retrieved from localStorage:", storedTodos);
    if (storedTodos) {
      try {
        const parsedTodos = JSON.parse(storedTodos);
        dispatch(setTodos(parsedTodos));
        console.log("Parsed todos:", parsedTodos);
      } catch (error) {
        console.error("Error parsing stored todos:", error);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    try {
      console.log("Saving to localStorage:", allTodos);
      localStorage.setItem("Todos", JSON.stringify(allTodos));
    } catch (error) {
      console.error("Error storing todos:", error);
    }
  }, [allTodos]);

  console.log("Current Redux state:", allTodos);

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
