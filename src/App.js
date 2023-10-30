import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import UpdateBooks from './pages/UpdateBooks';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/addBooks" element={<AddBooks/>}/>
        <Route path="/updateBooks" element={<UpdateBooks/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
 
  );
}

export default App;
