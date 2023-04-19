import logo from './logo.svg';
import './App.css';
import List from './component/List';
import { items } from './component/data'

function App() {
  return (
    <div className="App">
     {/* <List /> */}
     <List items={items} />
    </div>
  );
}

export default App;
