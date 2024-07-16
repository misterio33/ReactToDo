import { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import TodoItem from "./todoItem/todoItem";
import { TodoItemModel } from "../models/todoItemModel";
import CreateTodo from "./createTodo/createTodo";
import TodoItems from "./todoItems/todoItems";

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemModel[]>([
    { title: "title1", description: "descs1", level: "level1" },
    { title: "title2", description: "descs2", level: "level2" },
    { title: "title3", description: "descs3", level: "level3" },
    { title: "title4", description: "descs4", level: "level4" },
  ]);

  function handleAddTodo(title: string, description: string) {
    setTodoItems([
      ...todoItems,
      { title: title, description: description, level: "level" },
    ]);
  }

  return (
    <>
      <Header />
      <CreateTodo handleAddTodo={handleAddTodo} />
      <TodoItems items={todoItems} />
      <Footer />
    </>
  );
}

export default App;
