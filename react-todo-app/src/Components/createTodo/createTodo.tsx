import { useState } from "react";
import './createTodo.css'

interface CreateTodoProps {
  handleAddTodo: (title: string, description: string) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ handleAddTodo }) => {
  const [newTodoTitle, setNewTodoTitle] = useState<string>();
  const [newTodoDescription, setNewTodoDescription] = useState<string>();

  const onAddTodo = () => {
    handleAddTodo(newTodoTitle!, newTodoDescription!);
    setNewTodoTitle("");
    setNewTodoDescription("");
  };

  return (
    <div className="createTodo">
      <input
        type="text"
        value={newTodoTitle}
        onChange={(e) => setNewTodoTitle(e.target.value)}
      />
      <input
        type="text"
        value={newTodoDescription}
        onChange={(e) => setNewTodoDescription(e.target.value)}
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

export default CreateTodo;
