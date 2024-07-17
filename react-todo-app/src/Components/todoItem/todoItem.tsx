import { useContext, useState } from "react";
import { TodoItemModel } from "../../models/todoItemModel";
import "./todoItem.css";
import { TodoItemContext } from "../../context/todoItemsContext";

const TodoItem: React.FC<{ todoItem: TodoItemModel }> = ({ todoItem }) => {
  const {
    deleteHandler: onDeleteHandler,
    markAsDoneHandler: addToDoneHandler,
    markAsUnDoneHandler: unDoneHandler,
  } = useContext(TodoItemContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todoItem.title);
  const [editedDescription, setEditedDescription] = useState(
    todoItem.description
  );

  function handleEdit(item: TodoItemModel) {
    setIsEditing((prevState) => !prevState);
    if (isEditing) {
      item.title = editedTitle;
      item.description = editedDescription;
    }
  }
  return (
    <div className={todoItem.isDone ? "todoItem done" : "todoItem"}>
      <div className="content">
        {isEditing ? (
          <>
            <input
              className="title-input flicker"
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              className="description-input flicker"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <h1 className="title">{todoItem.title.toUpperCase()}</h1>
            <p className="description">{todoItem.description}</p>
          </>
        )}
        <p>Created at: {todoItem.createdAt.toDateString()}</p>
      </div>

      <div className="buttons">
        {isEditing ? (
          <button onClick={() => handleEdit(todoItem)}>Save</button>
        ) : (
          <>
            <button
              onClick={
                todoItem.isDone
                  ? () => unDoneHandler(todoItem)
                  : () => addToDoneHandler(todoItem)
              }
            >
              {todoItem.isDone ? "Undone" : "Done"}
            </button>
            {todoItem.isDone ? null : (
              <button onClick={() => handleEdit(todoItem)}>Edit</button>
            )}
            <button onClick={() => onDeleteHandler(todoItem)}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
