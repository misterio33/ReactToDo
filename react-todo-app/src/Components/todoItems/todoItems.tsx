import { TodoItemModel } from "../../models/todoItemModel";
import TodoItem from "../todoItem/todoItem";

const TodoItems: React.FC<{ items: TodoItemModel[] }> = ({ items }) => {
  return (
    <section>
      {items.map((item) => {
        return <TodoItem todoItem={item} />;
      })}
    </section>
  );
};

export default TodoItems;
