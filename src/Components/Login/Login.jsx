// import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import Axios from 'axios';
import { useNavigate,Link} from 'react-router-dom';
import { login } from '../Context/ContextProvider';
import { signup } from '../Context/ContextProvider';
const Login = () => {
  const {sign,setsign}=useContext(signup);
   const{log,setlog}=useContext(login);
  const [email, setemail] = useState("");
  const [password, setpass] = useState();
  const [error,setError]=useState();
  // const [list,setlist]=useState([]);
  const navigate = useNavigate();
  // const history=useNavigate();
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   Axios.post("http://localhost:4000/login", {email, password })
  //     .then((result) => {
  //       setlist([...list]);
  //       navigate('/home'); 
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }
  const handleClick = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8003/login", { email, password })
      .then((result) => {
        console.log(result.data)
        if (result.data === "User successfully logged in") {
          setlog(result.data);
          navigate('/home');
        }
        else{
          alert("You are not registered to this service")
      }
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setError("Email already exists. Please login instead.");
          console.log(res.email);
        } else {
          setError("You are not registered to this service ");
          alert('You are not registered to this service ')
          navigate('/signup')
        }
      });
  };
  return (
    <>
     
        <div className=" m-3 ">
            {
                sign ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{sign.name}</strong>   signed up  succesfully!
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            </div>
    <div className='row'>
      <div className="d-flex justify-content-center align-items-center min-vh-100 center-form ">
        <div className="col-md-5">
          <form >
            <h2 className="text-center">Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  </div>
              <input type="email" className="form-control" id="email"
                placeholder="Enter your email"  required
                onChange={(e) => setemail(e.target.value)} />
            </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3"><i class="fa-solid fa-key"></i></span>
                  </div>
              <input type="password" className="form-control" id="password"
                placeholder="Enter your password"  required
                onChange={(e) => setpass(e.target.value)} />
            </div>
            </div>
            <br></br>
            <button type="submit" className="container btn btn-success btn-block px-5" onClick={handleClick}>Login</button>
          </form>
          <p className='text-center m-3'>Don't have an account.?<Link to='/signup' className=' text-success '>Signup</Link></p>
          {error && <div className="alert alert-danger mt-3">{error}</div>} 
        </div>
      </div>
    </div>
    </>
  )
}
export default Login;