import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { TodoItemProvider } from "./context/todoItemsContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoItemProvider>
      <App />
    </TodoItemProvider>
  </React.StrictMode>
);
