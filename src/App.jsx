import React from 'react'
import { useState } from "react";
import './App.css';

const App = () => {
  const [todo, setTodo] = useState(""); // 할 일
  const [list, setList] = useState([]); // 할 일 목록
  const [title, setTitle] = useState(""); //할 일 제목

  //style모음
  const divStyle ={
    display: "flex",
  }

  const listStyle = {
    width: "250px",
    height: "230px",
    border: "2px solid green",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: "20px",
    margin: "20px",
    borderRadius: "15px",
    backgroundColor: "bisque"
  }

  const inputStyle ={
    borderRadius: "15px",
    margin: "10px",
    width: "300px",
    height: "25px"
  }

  const btnStyle ={
    display: "flex", 
    justifyContent: "space-between",
    backgroundColor: "transparent"
  }

  const addTodo = (e) => {
    e.preventDefault();
    if(!title || !todo){
      alert("제목과,할일을 모두 써주세요");
      return
    }

    const newTodo = {
      id: Date.now(),
      title: title,
      todo: todo,
      isDone: false
    };

    setList([...list, newTodo]);
    setTitle("");
    setTodo("");
  }

  const deleteTodo = (id) => {
    const updatedList = list.filter(i => i.id !== id);
    setList(updatedList);
  }
  

  const finishTodo = (id) => {
    const updatedList = list.map(todo => {
      if(todo.id === id){
        return {...todo, isDone: !todo.isDone}
      }
      return todo;
    })
    setList(updatedList);

  }

  return (
    <>
      <h1>My Todo List</h1>

      <form onSubmit={addTodo} style={{borderBottom: "5px solid green"}}>
        <input style={inputStyle} type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input style={inputStyle} type="text" placeholder="할 일" value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button style={{borderRadius: "10px", scale: "130%"}}type='submit'>완료</button>
      </form>

      <h2>진행중!</h2>
      <div style={divStyle}>
        {list.filter(todo => !todo.isDone).map((item, index) => (
          <div key={index} style={listStyle}>
            <div className={"item-title"}>{item.title}</div>
            <div className={"item-todo"}>{item.todo}</div>           
            <div style={btnStyle}>
              <button className="fin-btn" onClick={() => finishTodo(item.id)}>완료!</button>
              <button className="delete-btn" onClick={() => deleteTodo(item.id)}>삭제!</button>
            </div>
        </div>
        ))}
      </div>
      <br/><br/>
      <h2>완료!</h2>
      <div style={divStyle}>       
        {list.filter(todo => todo.isDone).map((item, index) => (
          <div key={index} style={listStyle}>
            <div className={"item-title"}>{item.title}</div>
            <div className={"item-todo"}>{item.todo}</div>
            <div style={btnStyle}>
              <button className="fin-btn" onClick={() => finishTodo(item.id)}>취소!</button>
              <button className="delete-btn" onClick={() => deleteTodo(item.id)}>삭제!</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App