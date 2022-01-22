import logo from './logo.svg';
import './App.css';
import {Login} from './components/login';
import { Route, Routes } from 'react-router-dom';
import {Signup} from './components/SignupForm';
import { Home } from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/singnup"} element={<Signup />} />
        <Route path={"/home"} element={<Home />}/>
        <Route path={"*"} element={<h1>Page not found</h1>}/>


      </Routes>
    </div>
  );
}

export default App;
