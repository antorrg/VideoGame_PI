//Importacion de dependencias:
import {Routes, Route} from 'react-router-dom';
 //Importacion de modulos:
 import Landing from './views/Landing/LandingPage';
 import Home from './views/Home/Home';
 import Detail from './views/Detail/Detail';
 import NavBar from './components/NavBar/NavBar';
 import Create from './components/Create/Create';
import './App.css';

function App() {
  return (
    
    <div className="App">
  
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route path='/home/:id' element={<Detail />}></Route>
          <Route path='/form' element={<Create/>}></Route>
          
        </Routes>

      </div>
      );
   
}

export default App;
