import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pocetna from './komponente/Pocetna';
import NavBar from './komponente/NavBar';
function App() {


  return (
    <div>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Pocetna></Pocetna>}></Route>
     
    </Routes>
   
    </BrowserRouter>
    
    </div>
  );
}

export default App;
