const TodoForm = ({ title, setTitle, todo, setTodo, addTodo }) => {
  const inputStyle = {
    borderRadius: "15px",
    margin: "10px",
    width: "300px",
    height: "25px",
  };

  return (
    <form onSubmit={addTodo} style={{ borderBottom: "5px solid green" }}>
      <input
        style={inputStyle}
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        style={inputStyle}
        type="text"
        placeholder="할 일"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button style={{ borderRadius: "10px", scale: "130%" }} type="submit">
        완료
      </button>
    </form>
  );
};

export default TodoForm;
