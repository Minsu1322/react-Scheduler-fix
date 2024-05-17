import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "../App.css";

const TodoContainer = () => {
  const [todo, setTodo] = useState(""); // 할 일
  const [list, setList] = useState([]); // 할 일 목록
  const [title, setTitle] = useState(""); //할 일 제목

  const addTodo = (e) => {
    e.preventDefault();
    if (!title || !todo) {
      alert("제목과,할일을 모두 써주세요");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      todo: todo,
      isDone: false,
    };

    setList([...list, newTodo]);
    setTitle("");
    setTodo("");
  };

  const deleteTodo = (id) => {
    const updatedList = list.filter((i) => i.id !== id);
    setList(updatedList);
  };

  const finishTodo = (id) => {
    const updatedList = list.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setList(updatedList);
  };

  return (
    <div>
      <TodoForm
        title={title}
        setTitle={setTitle}
        todo={todo}
        setTodo={setTodo}
        addTodo={addTodo}
      />
      <TodoList list={list} deleteTodo={deleteTodo} finishTodo={finishTodo} />
    </div>
  );
};

export default TodoContainer;
