import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from './Components/Navbar.js'
import Home from './Components/Home.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element ={<Home/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
