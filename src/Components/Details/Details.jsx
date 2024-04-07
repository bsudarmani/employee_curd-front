import React, { useEffect, useState } from "react";
import user from '../../assets/user.jpg';
import { useParams,NavLink,useNavigate} from "react-router-dom";
const Details = () => {
    const navigate=useNavigate();
    const [getUser, setUser] = useState([]);
    console.log(getUser);
    const {id}=useParams("");
    console.log(id);
    const getinpuser = async () => {
     try
       {
        const res = await fetch(`http://localhost:8003/getuser/${id}`, {
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
            setUser(data)
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
    const deleteuser=async(id)=>
    {
      const res2=await fetch(`http://localhost:8003/deleteuser/${id}`,{
          method:"DELETE",
          headers:
           {
              "Content-Type":"application/json"
           }
      });
      const deletedata=res2.json();
      console.log(deletedata);
      if(res2.status==422||!deletedata)
      {
          console.log("error");
      }
      else{
          console.log("user deleted");
          navigate("/home");
          getinpuser();
      }
    }
    return (
        <div className="container ">
          <div class="mb-3 ">
          <h1 style={{ fontWeight: 400 }} className="mt-3">Welcome User</h1>
                <div className="card mt-3" style={{width:600}}>    
                    <div className="card-body">
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                             <img src={user} style={{ width: 50 }} alt="profile"className="rounded-circle" /> 
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 ">
                        <NavLink to={`/edit/${getUser._id}`}><button type="button" className="m-2 bg-warning  btn btn-warning"><i className="fa-solid fa-pen"></i></button></NavLink>
                        <button  onClick={()=>deleteuser(getUser._id)} className="bg-danger btn btn-danger m-2"><i className="fa-solid fa-trash"></i></button>
                        </div>
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <h3 className="mt-3 h3 lead">Name: <span >{getUser.name}</span></h3>
                            <h3 className="mt-3 h3 lead">Age: <span >{getUser.age}</span></h3>
                            <p className="mt-3 h5 lead"><i className="fa fa-envelope mx-1" aria-hidden="true"></i>Email: <span>{getUser.email}</span></p>
                            <p className="mt-3 h5 lead "><i class="fa-solid fa-suitcase mx-1"></i>Occuption: <span>{getUser.work}</span></p>
                        </div>
                        <div className="right_view  col-lg-6 col-md-6 col-12">
                            <p className="mt-5 h5 lead"><i class="fa-solid fa-mobile mx-1"></i>mobile: <span>+91{getUser.mobile}</span></p>
                            <p className="mt-3 h5 lead"><i class="fa-solid fa-location-dot  mx-1"></i>location: <span>{getUser.add}</span></p>
                            <p className="mt-3 h6 lead">Description: <span>{getUser.desc}</span></p>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;