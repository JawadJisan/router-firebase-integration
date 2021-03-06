import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Orders from './components/Orders/Orders'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='orders' element={
          <RequireAuth>
            <Orders/>
          </RequireAuth>
        }></Route>
      </Routes>
     
    </div>
  );
}

export default App;
