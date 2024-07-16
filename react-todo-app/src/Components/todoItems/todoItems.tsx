import { useContext } from "react";
import TodoItem from "../todoItem/todoItem";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItems: React.FC = () => {
  const { todoItems } = useContext(TodoItemContext);
  return (
    <section className="todoItems">
      {todoItems.map((item) => {
        return <TodoItem todoItem={item} />;
      })}
    </section>
  );
};

export default TodoItems;
