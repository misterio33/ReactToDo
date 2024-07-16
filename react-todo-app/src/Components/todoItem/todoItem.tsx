import { useContext } from "react";
import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  const { onDeleteHandler } = useContext(TodoItemContext);

  return (
    <div className="todoItem">
      <div className="content">
        <p className="title">{todoItem.title}</p>
        <p className="description">{todoItem.description}</p>
        <p>{todoItem.level}</p>
      </div>
      <div className="buttons">
        <button>Done</button>
        <button>Update</button>
        <button onClick={() => onDeleteHandler(todoItem)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
