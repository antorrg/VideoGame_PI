//Importacion de dependencias:
import {Routes, Route} from 'react-router-dom';
 //Importacion de modulos:
 import Landing from './components/LandingPage';
 import Home from './components/Home';
 import Detail from './components/Detail';
 import NavBar from './components/NavBar';
 import Create from './components/Create';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route exact path='/home' element={<Home />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/form' element={<Create/>}></Route>
          
        </Routes>

    </div>
  );
}

export default App;
