import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ParkingList from './components/ParkingList';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component = {SearchBar}/>
        <Route path="/" component = {ParkingList}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
