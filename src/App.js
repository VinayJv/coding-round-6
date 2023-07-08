import logo from './logo.svg';
import './App.css';
import { Landing } from './pages/Landing';
import { Routes,Route } from "react-router-dom";
import { RestaurantPage } from './pages/RestaurantPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/:restaurantName" element={<RestaurantPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
