import React, { useState,useEffect, useContext} from "react";
import { NavLink,useParams,useNavigate} from "react-router-dom";
import { updatedata } from "../Context/ContextProvider";
const Edit = () => {
    const{updata,setupdata}=useContext(updatedata);
    const navigate=useNavigate();
    const [input,setinput]=useState(
        {
    name:"",
    email:"",
     age:"",
     mobile:"",
     work:"",             
     add:"",
     desc:"" ,       
        }
    )
    const setdata=(e)=>
    {
     console.log(e.target.value);
     const {name,value}=e.target;
    setinput((prev)=>
    {
     return{
        ...prev,
        [name]:value
     }
    })
    }
    // const [getUser, setUser] = useState([]);
    // console.log(getUser);
    const {id}=useParams("");
    console.log(id);
    const getinpuser = async () => {
     try
       {
        const res = await fetch(`https://cute-sombrero-duck.cyclic.app/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setinput(data)
            console.log("get data");

        }
     }
     catch(err)
     {
        console.log("server error");
     }
    }
    useEffect(() => {
        getinpuser();
    }, [])

    const updateuser=async(e)=>
    {
        e.preventDefault();
        const { name, email, age, work, add, mobile, desc } = input;
        const res2=await fetch(`https://cute-sombrero-duck.cyclic.app/updateuser/${id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, age, work, add, mobile, desc
            })
        })
        const data2= await res2.json();
        console.log(data2);
        if(res2.status==422||!data2)
        { 
            alert("fill the form");
        }
        else{
            setinput(data2)
            alert("data edited");
            navigate('/home');
            setupdata(data2);
        }
    }
    return (
        <div className="container my-5">
            <NavLink to={"/home"} >Home</NavLink>
            <form className="mt-4">
            <div className="row">
                    <div class="mb-3 col-lg-6 col-md-
                    6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text"  name="name" value={input.name} onChange={setdata} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">email</label>
                        <input type="email"  name="email" value={input.email} onChange={setdata} className="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Age</label>
                        <input type="text"  name="age" value={input.age}  onChange={setdata} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="number" name="mobile"  value={input.mobile}  onChange={setdata} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Work</label>
                        <input type="text"   name="work" value={input.work}  onChange={setdata} class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Address</label>
                        <input type="text" name="add" value={input.add}  onChange={setdata} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-12 col-md-12 col-12">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea name="desc"  value={input.desc}  onChange={setdata}  className="form-control" id="" cols="30" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={updateuser}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default  Edit;