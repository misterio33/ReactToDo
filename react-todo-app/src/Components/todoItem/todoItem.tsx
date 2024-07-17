import { useContext, useState } from "react";
import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  const { deleteHandler: onDeleteHandler, doneHandler: addToDoneHandler, unDoneHandler } =
    useContext(TodoItemContext);
  const className = todoItem.isDone ? "todoItem done" : "todoItem";

  return (
    <div className={className}>
      <div className="content">
        <p className="title">{todoItem.title}</p>
        <p className="description">{todoItem.description}</p>
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
