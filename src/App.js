import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="">
      <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/products' element={<Products></Products>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
