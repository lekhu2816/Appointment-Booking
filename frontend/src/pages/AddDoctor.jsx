import React, { useState } from "react";
import upload_area from "../assets/upload_area.png";
const AddDoctor = () => {
  const [image, setImage] = useState({ file: {}, preview: "" });
  const [doctorData,setDoctorData]=useState({
    name:"",
    email:"",
    password:"",
    experience:"",
    fees:"",
    about:"",
    speciality:"",
    degree:"",
    address:{
      line1:"",
      line2:""
    },
    slotAvailable:{
      MON:"",
      TUE:"",
      WED:"",
      THU:"",
      FRI:"",
      SAT:"",
      SUN:""

    }
})
  const fileChangeHandle = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImage({ file, preview: url });
  };

  return (
    <div className=" bg-white p-2">
      <h1 className="text-xl font-medium">Add Doctor</h1>

      {/*------------------ Doctor form--------------- */}
      <form>
        <div className="flex tablet:flex-col mobile:flex-col">
          {/* --------Doctor form section left-------- */}

          <div className="w-1/2 p-5 flex flex-col gap-2 tablet:w-full mobile:w-full mobile:p-2">
            {/*--------------adding name----------------  */}

            <div className="flex items-center gap-2">
              <label>
                <input
                  onChange={fileChangeHandle}
                  type="file"
                  accept="image/*"
                  hidden
                  required
                />
                <img
                  className="w-20 rounded-full"
                  src={image.preview || upload_area}
                />
              </label>
              <p>Add photo</p>
            </div>

            <div>
              <p className="text-gray-600">Name</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="text"
                name="name"
                value={doctorData.name}
                placeholder="Name"
                required
              />
            </div>

            {/*-----------------adding email------------------  */}

            <div>
              <p className="text-gray-600">Doctor Email</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="email"
                name="email"
                value={doctorData.email}
                placeholder="Email"
                required
              />
            </div>
            {/*-------------------adding password--------------------  */}
            <div>
              <p className="text-gray-600">Set Password</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="password"
                name="password"
                value={doctorData.password}
                placeholder="Password"
                required
              />
            </div>
            {/*-----------------Experience--------------  */}
            <div>
              <p className="text-gray-600">Experience</p>

              <select name="experience" value={doctorData.experience} className="px-4 py-2 border border-gray-400 w-full rounded-sm">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            {/*-----------------Fees--------------  */}

            <div>
              <p className="text-gray-600">Fees</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="number"
                name="fees"
                value={doctorData.fees}
                placeholder="fees"
                required
              />
            </div>

            {/* -------------About Doctor------------- */}

            <div>
              <p className="text-gray-600">About Doctor</p>
              <textarea
                rows={4}
                className="p-2 border border-gray-400 w-full rounded-sm"
                placeholder="about"
                name="about"
                value={doctorData.about}
                required
                
              ></textarea>
            </div>
          </div>

          {/* ---------------doctor from section right--------------------*/}

          <div className="w-1/2 p-5  flex flex-col gap-2 tablet:w-full mobile:w-full mobile:p-2">
            {/* ------------------speciality---------------- */}
            <div>
              <p className="text-gray-600">Speciality</p>
              <select name="speciality" value={doctorData.speciality} className="px-4 py-2 border border-gray-400 w-full rounded-sm">
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            {/* --------------------Degree--------------- */}
            <div>
              <p className="text-gray-600">Degree</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="text"
                placeholder="Degree"
                name="degree"
                value={doctorData.degree}
                required
              />
            </div>

            {/* --------------address----------------------- */}

            <div>
              <p className="text-gray-600">Address</p>
              <input
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="text"
                name="address.line1"
                value={doctorData.address.line1}
                placeholder="Address 1"
                required
              />
              <input
                className="mt-1 px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="text"
                name="address.line2"
                value={doctorData.address.line2}
                placeholder="Address 2"
                required
              />
            </div>
            {/* -----------------Slots Timing ---------*/}

            <div className="flex flex-col gap-1">
              <p className="text-gray-600">Add Slots</p>
              <div className="flex items-center gap-1">
                <p className="w-10">Sun</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Mon</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Tue</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Wed</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Thu</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Fri</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Sat</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 mobile:px-1">
          <button className="text-sm px-4 py-2 text-white bg-primary rounded-full">
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
