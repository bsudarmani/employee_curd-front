import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Context/ContextProvider';
const Signup = () => {
  const { sign, setsign } = useContext(signup);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpass] = useState();
  const [error, setError] = useState("");
  // const [list,setlist]=useState([]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8003/signup", { name, email, password })
      .then((result) => {
        // setlist([...list]);
        setsign(result.data);
        navigate('/login');
      })
      .catch((err) => {
        if (err.response && err.response.status === 409) {
          setError("Email already exists. Please login instead.");
        } else {
          setError("An error  Please fill the form");
        }
      });
  };
  return (
    <>
      <div className='row'>
        <div className="d-flex justify-content-center align-items-center min-vh-100 center-form ">
          <div className="col-md-5">
            <form className='container' >
              <h2 className="text-center">Sign Up</h2>
              <div className="form-group mb-3 col-lg-12 col-md-12 col-12">
                <label htmlFor="username">Username</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3"><i class="fa-solid fa-user"></i></span>
                  </div>
                  <input type="text" className="form-control" id="username"
                    placeholder="Enter your username"
                    onChange={(e) => setname(e.target.value)} required/>
                </div>
              </div>
              <div className="form-group mb-3 col-lg-12 col-md-12 col-12">
                <label htmlFor="email">Email</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                  </div>
                <input type="email" className="form-control" id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setemail(e.target.value)} required/>
              </div>
              </div>
              <div className="form-group mb-3 col-lg-12 col-md-12 col-12">
                <label htmlFor="password">Password</label>
                <div class="input-group mb-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text p-3"><i class="fa-solid fa-key"></i></span>
                  </div>
                <input type="password" className="form-control" id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setpass(e.target.value)} required />
              </div>
              </div>
              <br></br>
              <button type="submit" className="container btn btn-success btn-block px-5" onClick={handleClick}>Sign Up</button>
            </form>
            <p className='text-center m-3'>Already have an account created.?<Link to='/login' className=' text-success '>Signin</Link></p>
            {error && <div className="alert alert-danger mt-3">{error}</div>} {/* Render error message if exists */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;