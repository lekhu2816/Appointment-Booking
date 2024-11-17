import React, { useState } from "react";
import { NavLink, useNavigate ,Link } from "react-router-dom";
import {assets} from '../assets/assets.js'
const Navbar = () => {
  const navigate=useNavigate();
  const [token ,setToken]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className="z-20 relative">
      <div className=" w-full fixed top-0  px-10 py-2 mobile:px-2 tablet:px-5 flex justify-between items-center bg-white z-30 ">
        <Link to={'/'}>
          <img className="h-8" src={assets.logo} alt="" />
        </Link>
        <div>
          <ul className="gap-4 cursor-pointer flex mobile:hidden">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/doctors'}>All Doctors</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        {
          token ? <div className="group relative: mobile:hidden">
            <img  className="w-8 rounded-full " src={assets.profile_pic} alt="" />
             <div className="absolute top-0 right-0 pt-12 z-20 hidden group-hover:block">
              <div className=" cursor-pointer bg-gray-50 pt-1">
               <p className="pl-2 font-bold italic text-red-500">Hey</p>
               <p className="pl-2 font-bold">Lekhansh</p>
               <hr />
               <Link to={'/profile'} className="px-4 py-2 flex gap-2 items-center hover:bg-gray-100 "> <i className="fa-solid fa-user"></i> <span>My Profile</span></Link>
               <Link to={'/my-appointment'} className="px-4 py-2 flex gap-2 items-center  hover:bg-gray-100"> <i className="fa-solid fa-calendar-check"></i> <span>My Apointment</span></Link>
               <p className="px-4 py-2 flex gap-2 items-center  hover:bg-gray-100 "><i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span></p>
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
          <div className=" cursor-pointer bg-gray-50 pt-1">
           <p className="pl-1 font-bold italic text-red-500">Hey</p>
           <p className="pl-1 font-bold">Lekhansh</p>
           <hr />
           <Link to={'/profile'} className="px-3 py-2 flex gap-2 items-center hover:bg-slate-200 "> <i className="fa-solid fa-user"></i> <span>My Profile</span></Link>
           <Link to={'/my-appointment'} className="px-3 py-2 flex gap-2 items-center  hover:bg-slate-200"> <i className="fa-solid fa-calendar-check"></i> <span>My Apointment</span></Link>
           <p className="px-3 py-2 flex gap-2 items-center  hover:bg-slate-200 "><i className="fa-solid fa-right-from-bracket"></i> <span>Logout</span></p>
          </div>
         </div>
      </div>:<></>
       }
        <button  onClick={toggle} className="md:hidden text-2xl">
          <i className={`fa-solid ${!isOpen ? "fa-bars" : "fa-xmark"}`}></i>
        </button>
       </div>
       
      </div>
      <hr className="border-t-[1.2px] border-black-900 mx-5 mt-14 z " />

      
      <div
        className={`bg-slate-200 z-20 p-5 flex flex-col gap-4 text-center fixed top-12 left-0 w-full transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul onClick={()=>{setIsOpen(false)}} className="flex flex-col cursor-pointer">
          <li  className="p-1 hover:bg-slate-100">
            <Link to={'/'}>Home</Link>
          </li>
          <li onClick={()=>{setIsOpen(false)}}  className="p-1 hover:bg-slate-100">
            <Link to={'/doctors'}>All Doctors</Link>
          </li>
          <li  onClick={()=>{setIsOpen(false)}} className="p-1 hover:bg-slate-100">
            <Link to={'/about'}>About</Link>
          </li>
          <li  onClick={()=>{setIsOpen(false)}} className="p-1 hover:bg-slate-100">
            <Link to={'/contact'}>Contact</Link>
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
