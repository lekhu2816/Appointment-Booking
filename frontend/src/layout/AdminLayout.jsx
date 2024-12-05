import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const AdminLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className="px-10 py-2 flex justify-between bg-white mobile:px-5 tablet:px-5 fixed top-0 w-full">
        <div className="flex gap-2 items-center">
          <img
            onClick={() => {
              navigate("/");
            }}
            className="h-8"
            src={assets.logo}
            alt="logo"
          />
          <div className="border border-black px-2 py-1 rounded-full text-sm">
            Admin
          </div>
        </div>
        <button className="py-1 px-2  bg-primary text-white rounded-lg">
          Logout
        </button>
      </div>
      <hr />

      {/* ----------------bottom section------------------ */}

      <div className=" flex mobile:h-full tablet:h-full mt-14">

      {/*----------------- Sidebar------------------------- */}

        <div className="w-[20%] border border-slate-300 tablet:w-[10%] ">
          <Link
            to={"/admin/dashboard"}
            className={`${pathname=="/admin/dashboard"?"bg-blue-100 border-r-4 border-primary":""} pl-10 py-3 font-normal flex items-center  gap-2  cursor-pointer tablet:pl-5 mobile:pl-2`}
          >
            <i className="text-lg fa-solid fa-border-all"></i>
            <p className="tablet:hidden mobile:hidden">Dashboard</p>
          </Link>
          <Link
            to={"/admin/appointments"}
            className={`${pathname=="/admin/appointments"?"bg-blue-100 border-r-4 border-primary":""} px-10 py-3 font-normal flex items-center  gap-2  cursor-pointer tablet:px-5 mobile:px-2`}
          >
            <i className="text-lg fa-regular fa-calendar-days"></i>
            <p className="tablet:hidden mobile:hidden">Appointments</p>
          </Link>
          <Link
            to={"/admin/add-doctor"}
            className={`${pathname=="/admin/add-doctor"?"bg-blue-100 border-r-4 border-primary":""} px-10 py-3 font-normal flex items-center  gap-2  cursor-pointer tablet:px-5 mobile:px-2`}
          >
            <i className="text-lg fa-regular fa-square-plus"></i>
            <p className="tablet:hidden mobile:hidden">Add Doctor</p>
          </Link>
          <Link
            to={"/admin/doctors-list"}
            className={`${pathname=="/admin/doctors-list"?"bg-blue-100 border-r-4 border-primary":""} px-10 py-3 font-normal flex items-center  gap-2  cursor-pointer tablet:px-5 mobile:px-2`}
          >
            <i className="text-lg fa-solid fa-user-group"></i>
            <p className="tablet:hidden mobile:hidden">Doctors List</p>
          </Link>
        </div>
        <div className="w-[80%] p-5 bg-slate-100 pr-10 h-[90vh] overflow-scroll tablet:w-[90%] tablet:pr-5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
