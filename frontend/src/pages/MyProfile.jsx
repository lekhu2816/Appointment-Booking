import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name:"Lekhansh Sachan",
    email:"sachanlekhansh@gmail.com",
    phoneNo:7651970235,
    address:"1421/17 Y-Block Kidwai Nagar,Kanpur"
    
  });
  const [edit, setEdit] = useState(false);
  const fileInputRef=useRef(null)
 
 const handleOnChange=(e)=>{
  const {name,value} = e.target;
  console.log(name)
  console.log(value)
  setUserData((prev) => ({ ...prev, [name]: value }));

 }


 const onHandleSubmit=(e)=>{
 e.preventDefault()
 }

  const handleFilechange=(e)=>{
   console.log(e.target.files[0])
  }

  return (
    <div className="mx-10 tablet:mx-5 mobile:mx-2">
      <div className="flex flex-col gap-4">
        <div className="relative w-44 rounded-lg">
          <img className="w-full rounded-lg" src={assets.profile_pic} alt="" />
          {edit ? (
            <div  className="flex justify-end items-end w-6 h-7 bg-white absolute bottom-0 right-0 rounded-tl-full">
              <label htmlFor="profilePicInput">
                <i className="fa-solid fa-pen-to-square cursor-pointer"></i>
              </label>
              <input
                ref={fileInputRef}
                id="profilePicInput"
                style={{ display: "none" }}
                accept="image/*"
                type="file"
                onChange={handleFilechange}
                
              />
            </div>
          ) : null}
        </div>
        <h1 className="text-2xl font-medium">{userData.name}</h1>
        <hr />
      </div>

      {/* --------------------Contact Information----------------------- */}
      
      <form onSubmit={onHandleSubmit}>
      <div className="flex flex-col gap-3 mt-2">
        <h2 className="text-lg underline text-gray-600">Contact Information</h2>

        <div className="flex gap-6">
          <p className="font-medium">Email:</p>
          <p>{userData.email}</p>
        </div>

        <div className="flex items-center gap-6">
          <p className="font-medium">Phone No:</p>
          {
            edit?<input onChange={handleOnChange} className="border px-2 py-1" type="number" name="phoneNo" value={userData.phoneNo} />:<p>{userData.phoneNo}</p>
          }
        </div>

        <div className="flex gap-6">
          <p className="font-medium">Address:</p>
          {
            edit?<textarea value={userData.address} className="border px-2 py-1"></textarea>:<p>{userData.address}</p>
          }
          
        </div>
        <hr />
      </div>

      {/* --------------------Basic Information-------------------------- */}

      <div className="flex flex-col gap-3 mt-2">
        <h2 className="text-lg underline text-gray-600">Basic Information</h2>
        <div className="flex gap-6">
          <p className="font-medium">Gender:</p>
           {
            edit? <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>:<p>Male</p>
           }
        </div>
        <div className="flex gap-6">
          <p className="font-medium">Date of Birth:</p>
          {
            edit?<input type="date" />:<p>28-06-2002</p>
          }
        </div>
      </div>
      {
        edit?<button className="text-sm mt-5 px-4 py-2 border rounded-full border-primary ">Save Information</button>:<button onClick={()=>setEdit(true)} className="text-sm mt-5 px-4 py-2 border rounded-full border-primary">edit</button>
      }
      </form>
    </div>
  );
};

export default MyProfile;
