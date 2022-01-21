// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { Home } from './components/Home';
import {Profile } from './components/Profile'
import {Bookmarks } from './components/Bookmarks'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/register"} element={<Register />} />
        <Route path={"/home"} element={<Home />}/>
        <Route path={"/profile"} element={<Profile/>}/>
        <Route path={"/bookmarks"} element={<Bookmarks/>}/>
        <Route path={"*"} element={<h1>Page not found</h1>}/>


      </Routes>
    </div>
  );
}

export default App;
