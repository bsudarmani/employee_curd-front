import React, {useState,createContext } from "react";
export const adddata=createContext("");
export const updatedata=createContext(" ");
export const deletedata=createContext("");
export const signup=createContext(" ");
export const login=createContext(" ");
const ContextProvider=({children})=>
{
    const[adata,setadata]=useState("");
    const[updata,setupdata]=useState("");
    const[deldata,setdeldata]=useState("");
    const[sign,setsign]=useState("");
    const[log,setlog]=useState("");
    return(
        <>
         {/* <adddata.Provider value={{adata,setadata}}>
            <updatedata.Provider value={{updata,setupdata}}>
                <deletedata.Provider value={{deldata,setdeldata}}>
                  {children}
                </deletedata.Provider>
            </updatedata.Provider>
         </adddata.Provider> */}
         <signup.Provider value={{sign,setsign}}>
         <login.Provider value={{log,setlog}}>
         <adddata.Provider value={{adata,setadata}}>
            <updatedata.Provider value={{updata,setupdata}}>
                <deletedata.Provider value={{deldata,setdeldata}}>
                    {children}
                </deletedata.Provider>
            </updatedata.Provider>
         </adddata.Provider>
         </login.Provider>
         </signup.Provider>
        </>
    )
}
export default  ContextProvider;