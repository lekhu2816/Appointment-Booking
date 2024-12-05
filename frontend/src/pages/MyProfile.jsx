import React, { useContext, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/Context";
import axios from "axios";
const MyProfile = () => {
  const { userData, setUserData, SERVER_URL } = useContext(AppContext);
  const [edit, setEdit] = useState(false);
  const fileInputRef = useRef(null);
  const [profile, setProfile] = useState(null);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

// -------------------------handling form submit----------------------------//

  const onHandleSubmit = async (e) => {
    
   
      const formData = new FormData();
      formData.append("profile", profile);
      formData.append("userData", JSON.stringify(userData));

      try {
        const url = `${SERVER_URL}/api/user/update-profile`;
        const response = await axios.put(url, formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    
  };

  const handleFilechange = (e) => {
    console.log(e.target.files[0]);
    setProfile(e.target.files[0]);
  };

  return (
    <div className="mx-10 mt-1 tablet:mx-5 mobile:mx-2">
      <div className="flex flex-col gap-4">
        <div className="relative w-44 rounded-lg">
          <img className="w-full rounded-lg" src={userData.image} alt="" />
          {edit ? (
            <div className="flex justify-end items-end w-6 h-7 bg-white absolute bottom-0 right-0 rounded-tl-full">
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

      <div>
        <div className="flex flex-col gap-3 mt-2">
          <h2 className="text-lg underline text-gray-600">
            Contact Information
          </h2>

          <div className="flex gap-6">
            <p className="font-medium">Email:</p>
            <p>{userData.email}</p>
          </div>

          <div className="flex items-center gap-6">
            <p className="font-medium">Phone No:</p>
            {edit ? (
              <input
                onChange={handleOnChange}
                className="border px-2 py-1"
                type="number"
                name="phoneNo"
                value={userData.phoneNo}
              />
            ) : (
              <p>{userData.phoneNo}</p>
            )}
          </div>

          <div className="flex gap-6">
            <p className="font-medium">Address:</p>
            {edit ? (
              <textarea
                cols={22}
                onChange={handleOnChange}
                name="address"
                value={userData.address}
                className="border px-2 py-1"
              ></textarea>
            ) : (
              <p>{userData.address}</p>
            )}
          </div>
          <hr />
        </div>

        {/* --------------------Basic Information-------------------------- */}

        <div className="flex flex-col gap-3 mt-2">
          <h2 className="text-lg underline text-gray-600">Basic Information</h2>
          <div className="flex gap-6">
            <p className="font-medium">Gender:</p>
            {edit ? (
              <select name="Gender" onChange={handleOnChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <p>Male</p>
            )}
          </div>
          <div className="flex gap-6">
            <p className="font-medium">Date of Birth:</p>
            {edit ? (
              <input
                onChange={handleOnChange}
                name="dob"
                value={userData.dob}
                type="date"
              />
            ) : (
              <p>28-06-2002</p>
            )}
          </div>
        </div>
        {edit ? (
          <button onClick={onHandleSubmit} className="text-sm mt-5 px-4 py-2 border rounded-full border-primary ">
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="text-sm mt-5 px-4 py-2 border rounded-full border-primary"
          >
            edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
