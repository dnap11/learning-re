import logo from "./logo.svg";
// import "./App.css";
import TodoFeature from "./features/Todo";
import TodoList from "./features/Todo/components/TodoList";
// import AlbumFeature from "./features/Album";
// import ColorBox from "./components/ColorBox";
// import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <TodoFeature />
      <TodoFeature />
    </div>
  );
}

export default App;
