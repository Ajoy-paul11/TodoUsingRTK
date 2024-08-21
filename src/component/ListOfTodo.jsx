import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/todoSlice.jsx";
import { updateTodo } from "../store/slices/todoSlice.jsx";
import { toggleTodo } from "../store/slices/todoSlice.jsx";

function ListOfTodo({ todo, index }) {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState(todo.todo);
  const [toggle, setToggle] = useState(todo.toggleComplete);
  const [isTodoEditable, setIsTodoEditable] = useState(false);

  function toggleChecked() {
    setToggle(!toggle);

    dispatch(toggleTodo({ ...todo, toggleComplete: !toggle }));
  }

  const editTodo = () => {
    dispatch(updateTodo({ ...todo, todo: todoText }));
    setIsTodoEditable(false);
  };

  const removeTodo = (dex) => {
    dispatch(deleteTodo(dex));
  };

  return (
    <>
      <div className=" w-[90%] lg:w-[50%] mx-auto">
        <div
          className={` ${
            toggle ? "bg-green-500" : "bg-slate-600"
          } w-full flex justify-center outline-none duration-300 py-4 px-4 mb-3 rounded-lg`}
        >
          <div className=" w-full h-3 lg:h-5 flex items-center gap-x-4  ">
            <input
              type="checkbox"
              checked={toggle}
              onChange={toggleChecked}
              className=" h-5 w-5"
            />
            <input
              type="text"
              className={`${toggle ? " line-through " : ""} ${
                isTodoEditable
                  ? " outline outline-1 outline-white"
                  : " outline-none"
              } ${
                toggle ? "bg-green-400" : " bg-slate-500"
              } w-full h-8 lg:h-10 whitespace-pre text-lg lg:text-xl p-2 rounded-lg border-none duration-300 content-center`}
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              readOnly={!isTodoEditable}
            />
            <button
              onClick={() => {
                if (isTodoEditable) {
                  editTodo();
                } else {
                  setIsTodoEditable((prev) => !prev);
                }
              }}
              className=" h-8 w-8"
              disabled={toggle}
            >
              {" "}
              {isTodoEditable ? "📁" : "🖋"}
            </button>
            <button onClick={() => removeTodo(index)}>🗑</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListOfTodo;
