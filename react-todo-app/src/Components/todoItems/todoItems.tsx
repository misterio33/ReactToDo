import { useContext } from "react";
import TodoItem from "../todoItem/todoItem";
import { TodoItemContext } from "../../context/todoItemsContext";
import "./todoItems.css";

const TodoItems: React.FC = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    <section className="todoItems">
      {todoItems.length > 0 ? (
        <div>
          <div className="message">You have {todoItems.length} items to do</div>
        </div>
      ) : (
        <div className="message">No items to do, create a new one</div>
      )}
      {todoItems.map((item) => {
        return <TodoItem todoItem={item} />;
      })}
    </section>
  );
};

export default TodoItems;
