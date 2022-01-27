import ItemsList from "./components/ItemsList";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1 className="main-heading">Inventory App</h1>
      </div>
      <ItemsList/>
    </div>
  );
}

export default App;