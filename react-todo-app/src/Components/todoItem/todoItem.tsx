import { useContext } from "react";
import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  const {
    deleteHandler: onDeleteHandler,
    doneHandler: addToDoneHandler,
    unDoneHandler,
  } = useContext(TodoItemContext);
  const className = todoItem.isDone ? "todoItem done" : "todoItem";

  return (
    <div className={className}>
      <div className="content">
        <h1 className="title">{todoItem.title.toUpperCase()}</h1>
        <p className="description">{todoItem.description}</p>
        <p>Created at: {todoItem.createdAt.toDateString()}</p>
      </div>
      <div className="buttons">
        <button
          onClick={
            todoItem.isDone
              ? () => unDoneHandler(todoItem)
              : () => addToDoneHandler(todoItem)
          }
        >
          {todoItem.isDone ? "Undone" : "Done"}
        </button>
        {todoItem.isDone ? null : <button>Update</button>}
        <button onClick={() => onDeleteHandler(todoItem)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
