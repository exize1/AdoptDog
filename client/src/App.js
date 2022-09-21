import './App.css';
import { Route, Routes } from 'react-router-dom';
import Adoption from './pages/Adoption/Adoption';
import MainNavbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adoption" element={<Adoption/>}/>
      </Routes>

    </div>
  );
}

export default App;
