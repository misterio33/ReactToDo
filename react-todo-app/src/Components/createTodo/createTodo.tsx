import { useContext, useState } from "react";
import "./createTodo.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const CreateTodo: React.FC = () => {
  const { addHandler: onAddHandler } = useContext(TodoItemContext);
  const [newTodoTitle, setNewTodoTitle] = useState<string>("");
  const [newTodoDescription, setNewTodoDescription] = useState<string>("");

  const onAddTodo = () => {
    onAddHandler(newTodoTitle, newTodoDescription);
    setNewTodoTitle("");
    setNewTodoDescription("");
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoDescription(e.target.value);
  };

  return (
    <div className="createTodo">
      <input
        type="text"
        value={newTodoTitle}
        placeholder="Enter Tittle"
        onChange={handleTitleChange}
      />
      <input
        type="text"
        value={newTodoDescription}
        placeholder="Enter Description"
        onChange={handleDescriptionChange}
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
