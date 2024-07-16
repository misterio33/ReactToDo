import { createContext, ReactElement, useState } from "react";
import { TodoItemModel } from "../models/todoItemModel";

interface DoneTodoItemProps {
  children: ReactElement;
}

interface DoneTodoItemContext {
  doneItems: TodoItemModel[];
  addToDoneHandler: (itemToUndone: TodoItemModel) => void;
}

const DoneTodoItemContext = createContext({} as DoneTodoItemContext);

const DoneToDoItemProvider = (props: DoneTodoItemProps) => {
  const [doneTodoItems, setDoneTodoItems] = useState<TodoItemModel[]>([]);

  function addToDone(doneItem: TodoItemModel) {
    setDoneTodoItems((prevState) => {
      return [...prevState, doneItem];
    });
  }

  return (
    <>
      <DoneTodoItemContext.Provider
        value={{ doneItems: doneTodoItems, addToDoneHandler: addToDone }}
      >
        {props.children}
      </DoneTodoItemContext.Provider>
    </>
  );
};
