import { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import TodoItem from "./todoItem/todoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    { title: "title1", description: "descs1", level: "level1" },
    { title: "title2", description: "descs2", level: "level2" },
    { title: "title3", description: "descs3", level: "level3" },
    { title: "title4", description: "descs4", level: "level4" },
  ]);
  return (
    <>
      <Header />
      {todoItems.map((item) => {
        return (
          <>
            <TodoItem
              title={item.title}
              description={item.description}
              level={item.level}
            />
            <p>------------------------</p>
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default App;
