import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Header from './pages/shared/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/products' element={<Products></Products>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
