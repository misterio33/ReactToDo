import { useContext } from "react";
import { TodoItemContext } from "../../context/todoItemsContext";

const SortButtons: React.FC = () => {
  const { todoItems } = useContext(TodoItemContext);
  return <></>;
};

export default SortButtons;
