import React, { useContext, useState } from "react";
import upload_area from "../assets/upload_area.png";
import { AppContext } from "../context/Context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import Loader from "../component/Loader";
const AddDoctor = () => {
  const [loading ,setLoading]=useState(false)
  const { SERVER_URL } = useContext(AppContext);
  const [image, setImage] = useState({ file: {}, preview: "" });
  const [doctorData, setDoctorData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "",
    fees: "",
    about: "",
    speciality: "",
    degree: "",
    address: {
      line1: "",
      line2: "",
    },
    slotAvailable: {
      MON: "",
      TUE: "",
      WED: "",
      THU: "",
      FRI: "",
      SAT: "",
      SUN: "",
    },
  });

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (image.file == "") {
      toast.error("Add Profile Picture")
     
    } else {
      setLoading(true)
      const formData = new FormData();
      formData.append("image", image.file);
      formData.append("doctorData", JSON.stringify(doctorData));
      const url = `${SERVER_URL}/api/admin/add-doctor`;
        try {
          const response = await axios.post(url, formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          if(response.status==200){
            toast.success(response.data.message)
            setImage({ file: {}, preview: "" })
            setDoctorData({
              name: "",
              email: "",
              password: "",
              experience: "",
              fees: "",
              about: "",
              speciality: "",
              degree: "",
              address: {
                line1: "",
                line2: "",
              },
              slotAvailable: {
                MON: "",
                TUE: "",
                WED: "",
                THU: "",
                FRI: "",
                SAT: "",
                SUN: "",
              },
            })
          }
        } catch (error) {
          
         if(error.status==401||error.status==500){
          toast.error(error.response.data.message)
          
         }
        }
      
    }
    setLoading(false);
  };

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    if (name.includes(".")) {
      const [key, subKey] = name.split(".");
      setDoctorData((prev) => ({
        ...prev,
        [key]: { ...prev[key], [subKey]: value },
      }));
    } else {
      setDoctorData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const fileChangeHandle = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImage({ file, preview: url });
  };

  return (
    <div className=" bg-white p-2">
      <h1 className="text-xl font-medium">Add Doctor</h1>

      {/*------------------ Doctor form--------------- */}
      <form onSubmit={onFormSubmit}>
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
                onChange={onChangeHandle}
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
                onChange={onChangeHandle}
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
                onChange={onChangeHandle}
                placeholder="Password"
                required
              />
            </div>
            {/*-----------------Experience--------------  */}
            <div>
              <p className="text-gray-600">Experience</p>

              <select
                onChange={onChangeHandle}
                name="experience"
                value={doctorData.experience}
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
              >
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
                onChange={onChangeHandle}
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
                onChange={onChangeHandle}
                required
              ></textarea>
            </div>
          </div>

          {/* ---------------doctor from section right--------------------*/}

          <div className="w-1/2 p-5  flex flex-col gap-2 tablet:w-full mobile:w-full mobile:p-2">
            {/* ------------------speciality---------------- */}
            <div>
              <p className="text-gray-600">Speciality</p>
              <select
                onChange={onChangeHandle}
                name="speciality"
                value={doctorData.speciality}
                className="px-4 py-2 border border-gray-400 w-full rounded-sm"
              >
                 <option value="Speciality">Speciality</option>
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
                onChange={onChangeHandle}
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
                onChange={onChangeHandle}
                required
              />
              <input
                className="mt-1 px-4 py-2 border border-gray-400 w-full rounded-sm"
                type="text"
                name="address.line2"
                value={doctorData.address.line2}
                onChange={onChangeHandle}
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
                  name="slotAvailable.SUN"
                  value={doctorData.slotAvailable.SUN}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Mon</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.MON"
                  value={doctorData.slotAvailable.MON}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Tue</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.TUE"
                  value={doctorData.slotAvailable.TUE}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Wed</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.WED"
                  value={doctorData.slotAvailable.WED}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Thu</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.THU"
                  value={doctorData.slotAvailable.THU}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Fri</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.FRI"
                  value={doctorData.slotAvailable.FRI}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
              <div className="flex items-center gap-1">
                <p className="w-10">Sat</p>
                <input
                  className="px-4 py-1 border border-gray-400 w-full rounded-sm"
                  type="text"
                  name="slotAvailable.SAT"
                  value={doctorData.slotAvailable.SAT}
                  onChange={onChangeHandle}
                  placeholder="eg. 9:00 am , 1:30pm"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 mobile:px-1">
          {
            loading?<Loader/>:<button className="text-sm px-4 py-2 text-white bg-primary rounded-full">
            Add Doctor
          </button>
          }
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
