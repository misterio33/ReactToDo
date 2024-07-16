import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  return (
    <div className="todoItem">
      <p className="title">{todoItem.title}</p>
      <p className="description">{todoItem.description}</p>
      <p>{todoItem.level}</p>
    </div>
  );
};

export default TodoItem;
