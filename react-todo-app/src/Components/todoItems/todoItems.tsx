import { useContext } from "react";
import TodoItem from "../todoItem/todoItem";
import { TodoItemContext } from "../../context/todoItemsContext";
import "./todoItems.css";

const TodoItems: React.FC = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    <section className="todoItems">
      <div className="message">
        {todoItems.length > 0
          ? `You have ${todoItems.length} items to do`
          : "No items to do, create a new one"}
      </div>

      {todoItems.map((item) => (
        <TodoItem key={item.title} todoItem={item} />
      ))}
    </section>
  );
};

export default TodoItems;
