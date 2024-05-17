const TodoList = ({ list, deleteTodo, finishTodo }) => {
  const divStyle = {
    display: "flex",
  };

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
    backgroundColor: "bisque",
  };

  const btnStyle = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  };

  return (
    <>
      <h2>진행중!</h2>
      <div style={divStyle}>
        {list
          .filter((todo) => !todo.isDone)
          .map((item, index) => (
            <div key={index} style={listStyle}>
              <div className={"item-title"}>{item.title}</div>
              <div className={"item-todo"}>{item.todo}</div>
              <div style={btnStyle}>
                <button className="fin-btn" onClick={() => finishTodo(item.id)}>
                  완료!
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(item.id)}
                >
                  삭제!
                </button>
              </div>
            </div>
          ))}
      </div>
      <br />
      <br />
      <h2>완료!</h2>
      <div style={divStyle}>
        {list
          .filter((todo) => todo.isDone)
          .map((item, index) => (
            <div key={index} style={listStyle}>
              <div className={"item-title"}>{item.title}</div>
              <div className={"item-todo"}>{item.todo}</div>
              <div style={btnStyle}>
                <button className="fin-btn" onClick={() => finishTodo(item.id)}>
                  취소!
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(item.id)}
                >
                  삭제!
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TodoList;
