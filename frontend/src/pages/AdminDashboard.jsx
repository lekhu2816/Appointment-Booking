import React from "react";
import doctorLogo from "../assets/doctorLogo.png";
import patientLogo from "../assets/patientLogo.png";
import appointmentLogo from "../assets/appointmentLogo.png";
const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="rounded-md p-4 border bg-white border-slate-300 flex justify-center items-center gap-2">
          <img className="w-12" src={doctorLogo} alt="" />
          <div>
            <p>20</p>
            <p>Doctors</p>
          </div>
        </div>
        <div className="rounded-md p-4  bg-white border border-slate-300 flex justify-center items-center gap-2">
          <img className="w-12" src={appointmentLogo} alt="" />
          <div>
            <p>2</p>
            <p>Appointments</p>
          </div>
        </div>
        <div className="rounded-md p-4  bg-white border border-slate-300 flex justify-center items-center gap-2">
          <img className="w-12" src={patientLogo} alt="" />
          <div>
            <p>14</p>
            <p>Patients</p>
          </div>
        </div>
      </div>

      {/* ---------------latest appointments------------------------------ */}

      <div className="border border-slate-300  bg-white">
        <div>
          <p className="font-medium text-xl border-b border-black p-2">
            Latest Appointment
          </p>
          
          {[1, 2, 3, 4, 5,6,7,8,9 ,0].map((item, index) => {
            return (
              <div className="p-2 flex gap-2 items-center justify-between border-b">
                <div className="flex gap-2">
                  <img className="w-12 rounded-full" src={patientLogo} alt="" />
                  <div>
                    <p className="font-medium ">Lekhansh sachan</p>
                    <p className=" text-sm">Booked on 26th july 2024</p>
                  </div>
                </div>
                <div>
                  <p className="p-2 rounded-full bg-red-200">x</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
