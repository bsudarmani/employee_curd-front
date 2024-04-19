import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Signup  from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
// import Navbar from './Components/Navbar/Navbar';
import Edit from './Components/Edit/Edit';
import Details from './Components/Details/Details';
function App() {
  return (
    // <> 
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    //    <Route path='/signup' element={<Signup/>} ></Route>
    //    <Route path='/login' element={<Login/>}></Route>
    //    <Route path='/home' element={<Home/>}></Route>
    //    <Route path='/register' element={<Register/>}></Route>
    //    <Route path='/edit/:id' element={<Edit/>}></Route>
    //    <Route path='/view/:id' element={<Details/>}></Route>
    // </Routes>
    // </BrowserRouter>
    // </>
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/view/:id' element={<Details />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;

