import ChildComponent from "./components/ChildComponent";
import Counter from "./components/Counter";
import Users from "./components/Users";

const App = () => {
  return (
    <div>
      <p>Text rendered by the App component</p>
      <hr />
      <ChildComponent />
      <hr />
      <Counter />
      <hr />
      <Users />
    </div>
  );
};

export default App;
