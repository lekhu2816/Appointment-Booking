import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/Context";
import RelatedDoctors from "../component/RelatedDoctors";
const dayMap=new Map();
dayMap.set(0,"SUN")
dayMap.set(1,"MON")
dayMap.set(2,"TUE")
dayMap.set(3,"WED")
dayMap.set(4,"THU")
dayMap.set(5,"FRI")
dayMap.set(6,"SAT")

const schedule={
SUN:["9:00 am","12:00 pm","4:00 pm","7:00 pm"],  
MON:["8:00 am","11:00 am","3:30 pm","6:30 pm"],
TUE:["10:30 am","1:00 am","4:30 pm","7:30 pm"],
WED:["8:30 am","1:30 pm","4:30 pm","8:00 pm"],
THU:["9:30 am","12:30 pm","3:30 pm","8:30 pm"],
FRI:["11:00 am","11:30 am","3:00 pm","9:30 pm"],
SAT:["10:00 am","11:30 pm","5:30 pm","9:00 pm"]
}

const Appointment = () => {
  const { doctors } = useContext(AppContext);
  const { docId } = useParams();
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [doctorSlot,setDoctorSlot]=useState([]);
  const [slotIndex,setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState([]);
  const [slotTimeIndex,setSlotTimeIndex]=useState(-1);
  

  const fetchDoctorInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id == docId);
    setDoctorInfo(docInfo);
  };

  const getAvailableSlot=async()=>{
   setDoctorSlot([]);
   const today=new Date();
   const dateArray=[];
  for(let i=0;i<7;i++){
    let currentDate=new Date(today);
    currentDate.setDate(today.getDate()+i);
    dateArray.push(currentDate)
  }
  setDoctorSlot(dateArray);

 
  }

  const getSlotTime=()=>{
  // ----Getting slot-timing---------
  if (doctorSlot.length > 0 && doctorSlot[slotIndex]) {
    const arr = schedule[dayMap.get(doctorSlot[slotIndex].getDay())];
    const currentDate=new Date();
    
    const selectedDate=doctorSlot[slotIndex].getDate();
    const currentHour=currentDate.getHours();
    if(currentDate.getDate()==selectedDate){
    
   const selectedTime= arr.filter((time)=>{
      
       let [hour,minute]=time.split(":");
       let [m,period]=minute.split(" ");
       hour=parseInt(hour);
        if(period.toLowerCase()==="pm"&& hour!=12){
          hour=hour+12;
        }
        else if (period.toLowerCase() === "am" && hour === 12) {
          hour = 0;
        }
        if(currentHour>=hour){

        }
        else{
         return time
        }
        
       
    })
       setSlotTime(selectedTime);
    }
    else{
    
    setSlotTime(arr);
    }
    
    
   
  }
  }
  
  const handlingOnClick=(index)=>{
    setSlotTimeIndex(-1);
    setSlotIndex(index);
  }

  const bookingSlot=()=>{
     
  }

  useEffect(()=>{
    getAvailableSlot()
  },[doctorInfo])

  useEffect(() => {
    fetchDoctorInfo();
  }, [docId, doctors]);
  
   useEffect(()=>{
    getSlotTime()
   },[slotIndex,doctorSlot,doctorInfo])

  return (
    doctorInfo && (
<div className=" my-5 mx-10 tablet:mx-5 mobile:mx-2">

    {/*------------------------ About Doctor---------------------------- */}
    <div className="flex gap-4 my-5 mobile:flex-col">
            {/* Doctor-Images */}
        <div className="bg-primary rounded-lg flex items-end">
          <img className="w-full" src={doctorInfo.image} alt="" />
        </div>

        {/*-------------------- Doctor-details-------------------------- */}
        
       <div className="p-5 border-[1.5px]  rounded-lg flex flex-col gap-2 border-gray-400">
            <div>
              <h1 className="text-xl font-medium">{doctorInfo.name}</h1>
              <div className="flex items-center gap-2 text-sm text-slate-600">
              <p >
                {doctorInfo.degree} - {doctorInfo.speciality}
                
              </p>
              <p className=" px-2 text-[12px] rounded-full  border border-black">{doctorInfo.experience}</p>
            </div>
            </div>

            

            <div>
              <p className="font-medium">
                About  <span>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </span>
                 
              </p>
              <p className="text-slate-700 text-sm">{doctorInfo.about}</p>
            </div>
            <div className="text-sm">
                Appointment fee: <span className="text-[16px] font-medium">₹{doctorInfo.fees}</span>
            </div>
        </div>
       
    </div>
    {/* ----------------------------Slot Booking----------------------------- */}
    <div className="flex flex-col gap-4 items-start w-full">
   <p>Booking Slot</p>
   
   {/* Booking Slot Wrapper */}
     <div className="flex gap-4  w-full overflow-scroll">
       {
         doctorSlot.map((date, index) => (
           <div>
            <div
             onClick={() => handlingOnClick(index)}
             key={index}
             className={`border border-gray-400 w-16  py-4 cursor-pointer rounded-full text-center font-medium ${slotIndex === index ? "bg-primary text-white border-primary" : "bg-white text-gray-700"}`}
           >
             <p>{dayMap.get(date.getDay())}</p>
             <p>{date.getDate()}</p>
           </div>
           </div>
         ))
       }
     </div>
  
   
   {/* Slot Timing Wrapper */}
   <div className="w-full  mt-4">
    {
      slotTime.length==0?<div className="text-lg text-red-600 p-2 ">
         No more booking
      </div>:<div className="flex overflow-scroll gap-4 ">
       {
         slotTime.map((time, index) => (
           <div onClick={()=>setSlotTimeIndex(index)}>
            <p
             key={index}
             className={`text-center text-sm p-2 w-20 border-[1.5px] border-gray-400 cursor-pointer rounded-full whitespace-nowrap ${slotTimeIndex==index?"bg-primary text-white border-primary":""}`}
           >
             {time}
           </p>
           </div>
         ))
       }
     </div>
    }
     
   </div>
   
 {
  slotTime.length>0?  <button className="text-sm py-2 px-10 bg-primary text-white rounded-full mt-4">
  Book an appointment
</button>:<></>
 }
</div>
    <RelatedDoctors docId={docId} speciality={doctorInfo.speciality}/>
</div>
    )
  );
};

export default Appointment;
