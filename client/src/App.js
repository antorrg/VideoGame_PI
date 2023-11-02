import './App.css';
//Importacion de dependencias:
import {Routes, Route} from 'react-router-dom';
 //Importacion de modulos:
 import {Landing, Detail, Home, Create} from './views/index1';
 import axios from 'axios';
 axios.defaults.baseURL = 'http://localhost:3001';



function App() {
  return (
    <div className="App">
     
      <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route exact path='/home' element={<Home/>}></Route>
          <Route path='/home/:name' element={<Home />}></Route>
          <Route path='/detail/:id' element={<Detail />}></Route>
          <Route path='/form' element={<Create/>}></Route>
          
        </Routes>
       

    </div>
  );
}

export default App;
