import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Context";
const Doctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [showSpeciality,setShowSpeciality]=useState(false);

  const applyFilter = () => {
    if (speciality) {
      const doctorSpeciality = doctors.filter((item, index) => {
        return speciality == item.speciality;
      });
      setFilterDoctor(doctorSpeciality);
    } else {
      setFilterDoctor(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [speciality, doctors]);
  return (
    <div className="my-5 mx-10 tablet:mx-5 mobile:mx-2">
      <p>Browse through the doctors specialist.</p>

      <div className="mt-4 flex  gap-4 mobile:flex-col tablet:flex-col">
        {/* doctors speciality */}
       <div>
       <button onClick={()=>setShowSpeciality((prev)=>!prev)} className={`px-5 rounded-lg py-1 border border-black hidden ${showSpeciality?"bg-primary text-white border-primary":""} mobile:block tablet:block `}>
          Filter by speciality
        </button>
       </div>
        <div className={` flex flex-col gap-2  text-sm  tablet:${showSpeciality?"":"hidden"}  mobile:${showSpeciality?"":"hidden"}`} >
          <p onClick={()=>speciality=="General physician"?navigate('/doctors'):navigate('/doctors/General physician')}
            className={`py-2 px-10   rounded-lg  cursor-pointer ${
              speciality == "General physician"
                ? "border-primary border-2"
                : " border-gray-300 border"
            }`}
          >
            General physician
          </p>
          <p onClick={()=>speciality=="Gynecologist"?navigate('/doctors'):navigate('/doctors/Gynecologist')}
            className={`py-2 px-10 rounded-lg cursor-pointer ${
              speciality == "Gynecologist" ? "border-primary border-2" : " border-gray-300 border "
            }`}
          >
            Gynecologist
          </p>
          <p onClick={()=>speciality=="Dermatologist"?navigate('/doctors'):navigate('/doctors/Dermatologist')}
            className={`py-2 px-10  rounded-lg cursor-pointer ${
              speciality == "Dermatologist" ? "border-primary border-2" : " border-gray-300 border"
            }`}
          >
            Dermatologist
          </p>
          <p onClick={()=>speciality=="Pediatricians"?navigate('/doctors'):navigate('/doctors/Pediatricians')}
            className={`py-2 px-10 rounded-lg cursor-pointer ${
              speciality == "Pediatricians" ? "border-primary border-2" : " border-gray-300 border "
            }`}
          >
            Pediatricians
          </p>
          <p onClick={()=>speciality=="Neurologist"?navigate('/doctors'):navigate('/doctors/Neurologist')}
            className={`py-2 px-10  rounded-lg cursor-pointer ${
              speciality == "Neurologist" ? "border-primary border-2" : " border-gray-300 border "
            }`}
          >
            Neurologist
          </p>
          <p onClick={()=>speciality?navigate('/doctors'):navigate('/doctors/Gastroenterologist')}
            className={`py-2 px-10  rounded-lg cursor-pointer ${
              speciality == "Gastroenterologist"
                ? "border-primary border-2"
                : "  border-gray-300 border "
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors info */}

        <div className=" w-full flex justify-center flex-wrap gap-4">
          {filterDoctor.map((item, index) => {
            return (
              <div
                onClick={() => navigate(`/appointment/${item._id}`)}
                key={index}
                className="cursor-pointer w-[220px] border border-blue-200 rounded-xl overflow-hidden tablet:w-[45%]
                  mobile:w-full hover:translate-y-[-10px] transition-all duration-300"
              >
                <img className="w-full bg-blue-50" src={item.image} alt="" />
                <div className="p-4">
                  <div className="flex gap-2 items-center text-sm">
                    <p className="w-2 h-2 bg-green-600 rounded-full"></p>
                    <p className="text-green-600">Available</p>
                  </div>
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-gray-600 text-sm">{item.speciality}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
