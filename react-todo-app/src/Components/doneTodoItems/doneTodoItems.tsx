import { useContext } from "react";
import TodoItem from "../todoItem/todoItem";
import { TodoItemContext } from "../../context/todoItemsContext";
import "../todoItems/todoItems.css";

const DoneTodoItems: React.FC = () => {
  const { doneTodoItems } = useContext(TodoItemContext);
  return (
    <>
      <br />
      <section className="todoItems">
        {doneTodoItems.length > 0 ? (
          <div className="message">You have done {doneTodoItems.length} items!</div>
        ) : null}
        {doneTodoItems.map((item) => {
          return <TodoItem todoItem={item} />;
        })}
      </section>
    </>
  );
};

export default DoneTodoItems;
