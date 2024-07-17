import Footer from "./footer/footer";
import Header from "./header/header";
import CreateTodo from "./createTodo/createTodo";
import TodoItems from "./todoItems/todoItems";
import DoneTodoItems from "./doneTodoItems/doneTodoItems";

function App() {
  return (
    <>
      <Header />
      <CreateTodo />
      <TodoItems />
      <DoneTodoItems/>
      <Footer />
    </>
  );
}

export default App;
