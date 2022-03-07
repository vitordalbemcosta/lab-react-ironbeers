import './App.css';
import { Routes, Route } from "react-router-dom";
import AllBeersPage from './pages/AllBeersPage/AllBeersPage';
import NewBeersPage from './pages/NewBeersPage/NewBeersPage';
import RandomBeersPage from './pages/RandomBeersPage/RandomBeersPage';
import SingleBeer from './pages/SingleBeer/SingleBeerPage';
import HomePage from './pages/HomePage/HomePage.jsx'
// import Navbar from './ Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/allbeerspage" element={<AllBeersPage />} />
        <Route path="/randombeerspage" element={<RandomBeersPage />} />
        <Route path="/newbeerpage" element={<NewBeersPage />} />
        <Route path="/singlebeerpage" element={<SingleBeer />} />
      </Routes>
    </div>
  );
}

export default App;
