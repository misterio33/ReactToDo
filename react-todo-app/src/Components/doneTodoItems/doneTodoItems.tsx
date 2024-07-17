import { useContext } from "react";
import TodoItem from "../todoItem/todoItem";
import { TodoItemContext } from "../../context/todoItemsContext";

const DoneTodoItems: React.FC = () => {
  const { doneTodoItems } = useContext(TodoItemContext);
  return (
    <>
      <br />
      <section className="todoItems">
        {doneTodoItems.length > 0 ? <div>Done Todo Items</div> : null}
        {doneTodoItems.map((item) => {
          return <TodoItem todoItem={item} />;
        })}
      </section>
    </>
  );
};

export default DoneTodoItems;
