import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <h1 className="my-5 text-3xl font-normal text-center">Contact Us</h1>

      <div className= "flex justify-center tablet:mx-5 mobile:mx-2">
        <div className=" w-[60%] tablet:w-full mobile:w-full">
          <div className=" flex gap-10   mobile:mx-2 mobile:flex-col">

            {/* section-left */}
            <div className="w-1/2  mobile:w-full">
              <img
                className="h-full rounded-lg"
                src={assets.contact_image}
                alt="image"
              />
            </div>

            {/* section - right */}

            <div className="w-1/2 flex flex-col justify-center mobile:w-full ">
              <div className="flex flex-col gap-4 mobile:items-center ">
                <h2 className="font-semibold">OUR OFFICE</h2>
                <p className="text-sm">
                  54709 Willms Station <br /> Suite 350, Washington, USA
                </p>
                <div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-blue-600"></i>
                  <p className="text-sm">prescripto@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 my-1">
                  <i className="fa-solid fa-phone text-green-700"></i>
                  <p className="text-sm">+91 950-663-1631</p>
                </div>
                </div>
              </div>


              <div className="mt-5 flex flex-col items-start gap-4  mobile:items-center mobile:text-center">
                <h1 className="font-semibold">CAREERS AT PRESCRIPTO</h1>
                <p>Learn more about our teams and job openings.</p>
                <button className="text-sm border border-black p-2 hover:text-primary hover:border-primary">Explore Jobs</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-10 mx-10 tablet:mx-5 mobile:mx-2" />
    </div>
  );
};

export default Contact;
