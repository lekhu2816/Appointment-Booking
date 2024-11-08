import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {assets} from '../assets/assets.js'
const Navbar = () => {
  const navigate=useNavigate();
  const [token ,setToken]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="z-20 relative">
      <div className="px-10 py-2 mobile:px-5 tablet:px-5 flex justify-between items-center bg-white z-30 relative">
        <div>
          <img className="h-8" src={assets.logo} alt="" />
        </div>
        <div>
          <ul className="gap-4 cursor-pointer flex mobile:hidden">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink>All Doctors</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </div>
        {
          token ? <div className="group relative: mobile:hidden">
            <img  className="w-8 rounded-full " src={assets.profile_pic} alt="" />
             <div className="absolute top-0 right-0 pt-12 z-20 hidden group-hover:block">
              <div className=" cursor-pointer bg-slate-100 pt-1">
               <p className="pl-1 font-bold italic text-red-500">Hey</p>
               <p className="pl-1 font-bold">Lekhansh</p>
               <hr />
               <p className="px-2 py-1 flex gap-2 items-center hover:bg-slate-200 "> <i className="fa-solid fa-user"></i> <span>My Profile</span></p>
               <p className="px-2 py-1 flex gap-2 items-center  hover:bg-slate-200"> <i className="fa-solid fa-calendar-check"></i> <span>My Apointment</span></p>
               <p className="px-2 py-1 flex gap-2 items-center  hover:bg-slate-200 "><i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span></p>
              </div>
             </div>
          </div>:
          <button onClick={()=>navigate('auth/signin')} className="px-2 py-1 bg-blue-500  text-white rounded-md  mobile:hidden">
          Login
        </button>
        }
          
        

       <div className="hidden gap-4 items-center mobile:flex">
       {
        token ? <div className="group relative: md:hidden">
        <img  className="w-8 rounded-full " src={assets.profile_pic} alt="" />
         <div className="absolute top-0 right-0 pt-12 z-20 hidden group-hover:block">
          <div className=" cursor-pointer bg-slate-100 pt-1">
           <p className="pl-1 font-bold italic text-red-500">Hey</p>
           <p className="pl-1 font-bold">Lekhansh</p>
           <hr />
           <p className="px-2 py-1 flex gap-2 items-center hover:bg-slate-200 "> <i className="fa-solid fa-user"></i> <span>My Profile</span></p>
           <p className="px-2 py-1 flex gap-2 items-center  hover:bg-slate-200"> <i className="fa-solid fa-calendar-check"></i> <span>My Apointment</span></p>
           <p className="px-2 py-1 flex gap-2 items-center  hover:bg-slate-200 "><i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span></p>
          </div>
         </div>
      </div>:<></>
       }
        <button  onClick={toggle} className="md:hidden text-xl">
          <i className={`fa-solid ${!isOpen ? "fa-bars" : "fa-xmark"}`}></i>
        </button>
       </div>
       
      </div>
      <hr className="border-t-[1.5px] border-black-900 mx-5" />

      
      <div
        className={`bg-slate-200 z-20 p-5 flex flex-col gap-4 text-center fixed top-12 left-0 w-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul onClick={()=>{setIsOpen(false)}} className="flex flex-col cursor-pointer">
          <li  className="p-1 hover:bg-slate-100">
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li onClick={()=>{setIsOpen(false)}}  className="p-1 hover:bg-slate-100">
            <NavLink>All Doctors</NavLink>
          </li>
          <li  onClick={()=>{setIsOpen(false)}} className="p-1 hover:bg-slate-100">
            <NavLink>About</NavLink>
          </li>
          <li  onClick={()=>{setIsOpen(false)}} className="p-1 hover:bg-slate-100">
            <NavLink>Contact</NavLink>
          </li>
        </ul>
       {
        token ?<></>:<button onClick={()=>navigate('auth/signin')}  className="px-2 py-1 bg-blue-500 text-white rounded-md">
        Login
      </button>
       }
      </div>
    </nav>
  );
};

export default Navbar;
