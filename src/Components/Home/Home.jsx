import React, { useEffect, useState, useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import { adddata } from '../Context/ContextProvider';
import { updatedata } from "../Context/ContextProvider";
import { deletedata } from "../Context/ContextProvider";
// import { signup } from "../Context/ContextProvider";
import { login } from "../Context/ContextProvider";
import './Home.css';
const Home = () => {
    const {log,setlog}=useContext(login);
    //  const {sign,setsign}=useContext(signup);
    const { adata, setadata } = useContext(adddata);
    const { updata, setupdata } = useContext(updatedata);
    const { deldata, setdeldata } = useContext(deletedata);
    const [getUserdata, setUserdata] = useState([]);
    console.log(getUserdata);

    const getinpdata = async () => {
        try {
            const res = await fetch("https://cute-sombrero-duck.cyclic.app/getdata", {
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
                setUserdata(data);
                console.log("get data");

            }
        }
        catch (err) {
            console.log("server error");
        }
    }

    useEffect(() => {
        getinpdata();
    }, [])
    const deleteuser = async (id) => {
        const res2 = await fetch(`https://cute-sombrero-duck.cyclic.app/deleteuser/${id}`, {
            method: "DELETE",
            headers:
            {
                "Content-Type": "application/json"
            }
        });
        const deletedata = res2.json();
        console.log(deletedata);
        if (res2.status == 422 || !deletedata) {
            console.log("error");
        }
        else {
            console.log("user deleted");
            setdeldata(deletedata);
            getinpdata();
        }
    }
    return (
        <>
         <div className=" m-5 ">
            {
                log ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{log.name}</strong>  log in succesfully!
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            </div>
        {/* {
         sign ? (
            <div className="alert alert-success alert-dismissible" role="alert">
                <strong>{sign.name}</strong> registered succesfully!
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        ) : ""
        } */}
            <div className=" m-5 ">
            {
                adata ?
                    <>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{adata.name}</strong>  register  succesfully!
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            </div>
            <div className=" m-5 ">
            {
                updata ?
                    <>
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated  succesfully!
                            <button type="button" className="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            </div>
            <div className="m-5">
            {
                deldata ?
                    <>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{deldata.name}</strong> deleted Succesfully!
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </> : ""
            }
            </div>
            <div className="mt-5">
                <div className="container">
                    <div className=" add_btn mt-2 mb-3">
                        {/* <span><button className="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i> Add data</button></span> */}
                        <div className=" mt-2 mb-2">
                            <NavLink to="/register" className="btn btn-primary"><i className="fa fa-plus " aria-hidden="true"></i>  Add data</NavLink>
                        </div>
                    </div>
                    <div>
                        <table className="table align-item-cent">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">id</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">email</th>
                                    <th scope="col">job</th>
                                    <th scope="col">Number</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {getUserdata.map((input, i) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{input.name}</td>
                                                <td>{input.email}</td>
                                                <td>{input.work}</td>
                                                <td>{input.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`/view/${input._id}`}><button type="button" className="bg-success btn btn-success"><i className="fa fa-eye" aria-hidden="true"></i></button></NavLink>
                                                    <NavLink to={`/edit/${input._id}`}><button type="button" className="bg-warning  btn btn-warning"><i className="fa-solid fa-pen"></i></button></NavLink>
                                                    <button onClick={() => deleteuser(input._id)} className="bg-danger btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })}
                                {/* <tr>
                                  <th scope="row">3</th>
                                    <td>depp</td>
                                    <td>depp@gmail.com</td>
                                    <td>ios deveolper</td>
                                    <td>984357612</td>
                                    <td className="d-flex justify-content-between">
                                    <button type="button" className="bg-success btn btn-success"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                     <button type="button" className="bg-warning  btn btn-warning"><i className="fa-solid fa-pen"></i></button>
                                     <button type="button" className="bg-danger btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                    </tr>
                                <tr>
                                  <th scope="row">3</th>
                                    <td>depp</td>
                                    <td>depp@gmail.com</td>
                                    <td>ios deveolper</td>
                                    <td>984357612</td>
                                    <td className="d-flex justify-content-between">
                                    <button type="button" className="bg-success btn btn-success"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                     <button type="button" className="bg-warning  btn btn-warning"><i className="fa-solid fa-pen"></i></button>
                                     <button type="button" className="bg-danger btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                    </tr>
                                <tr>
                                  <th scope="row">3</th>
                                    <td>depp</td>
                                    <td>depp@gmail.com</td>
                                    <td>ios deveolper</td>
                                    <td>984357612</td>
                                    <td className="d-flex justify-content-between">
                                    <button type="button" className="bg-success btn btn-success"><i className="fa fa-eye" aria-hidden="true"></i></button>
                                     <button type="button" className="bg-warning  btn btn-warning"><i className="fa-solid fa-pen"></i></button>
                                     <button type="button" className="bg-danger btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                    </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h1 className='text-center h5'> Do you known <span className='text-success' ><Link className="link" to="https://sudarmani.netlify.app/home">Sudarmani</Link></span> <span className='text-ligh '>🤍 </span> </h1>
        </>
    )
}
export default Home;