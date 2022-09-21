import './App.css';
import Adoption from './pages/Adoption/Adoption';
import MainNavbar from './components/navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App ">
      <MainNavbar></MainNavbar>
      <Home></Home>
      {/* <Adoption></Adoption> */}
    </div>
  );
}

export default App;
