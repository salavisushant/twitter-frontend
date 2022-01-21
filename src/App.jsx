import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/register"} element={<Register />} />
        <Route path={"*"} element={<h1>Page not found</h1>}/>


      </Routes>
    </div>
  );
}

export default App;
