import { useContext, useState } from "react";
import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  const { onDeleteHandler } = useContext(TodoItemContext);
  const [isDone, setIsDone] = useState(false);
  const className = isDone ? "todoItem done" : "todoItem";

  function handleDone() {
    setIsDone((prevState) => {
      return !prevState;
    });
  }
  return (
    <div className={className}>
      <div className="content">
        <p className="title">{todoItem.title}</p>
        <p className="description">{todoItem.description}</p>
        <p>{todoItem.level}</p>
      </div>
      <div className="buttons">
        <button onClick={handleDone}>{isDone ? "Undone" : "Done"}</button>
        {isDone ? null : <button>Update</button>}
        <button onClick={() => onDeleteHandler(todoItem)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
