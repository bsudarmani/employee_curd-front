import React, { useState,useContext} from 'react'
import { NavLink, useNavigate} from 'react-router-dom';
import {adddata} from '../Context/ContextProvider';
const Register = () => {
    const {adata,setadata}=useContext(adddata);
    const navigate=useNavigate();
    const [input, setinput] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        desc: ""
    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setinput((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const addinpdata = async (e) => {
      e.preventDefault();
  
      const { name, email, age, work, add, mobile, desc } = input;
  
      try {
          const response = await fetch("https://cute-sombrero-duck.cyclic.app/register", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  name, email, age, work, add, mobile, desc
              })
          });
  
          const data2= await response.json();
          console.log(data2);
          if(data2.status==422||!data2)
          { 
              alert("fill the form");
          }
          else{
              setinput(data2)
              navigate('/home');
              setadata(data2);
          }
      } catch (error) {
          console.error(" serverError");
          alert("server Error: ");
      }
  }
    return (
        <div className="container m-5">
            <NavLink to="/home">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" value={input.name} onChange={setdata} name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input type="email" value={input.email} onChange={setdata} name="email" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">age</label>
                        <input type="text" value={input.age} onChange={setdata} name="age" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={input.mobile} onChange={setdata} name="mobile"className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text" value={input.work} onChange={setdata} name="work"className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" value={input.add} onChange={setdata} name="add" className="form-control" id="exampleInputPassword1" />
                
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc" value={input.desc} onChange={setdata} className="form-control" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit" onClick={addinpdata} className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Register;