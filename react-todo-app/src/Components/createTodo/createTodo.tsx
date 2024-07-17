import { useContext, useState } from "react";
import "./createTodo.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const CreateTodo: React.FC = () => {
  const { addHandler: onAddHandler } = useContext(TodoItemContext);
  const [newTodoTitle, setNewTodoTitle] = useState<string>();
  const [newTodoDescription, setNewTodoDescription] = useState<string>();

  const onAddTodo = () => {
    onAddHandler(newTodoTitle!, newTodoDescription!);
    setNewTodoTitle("");
    setNewTodoDescription("");
  };

  return (
    <div className="createTodo">
      <input
        type="text"
        value={newTodoTitle}
        placeholder="Enter Tittle"
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <input
        type="text"
        value={newTodoDescription}
        placeholder="Enter Description"
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
