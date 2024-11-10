import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="mx-10 tablet:mx-5 mobile:mx-2 ">
      <h1 className="my-5 text-3xl font-normal text-center">About Us</h1>

      {/*section top  */}

      <div className="flex  tablet:flex-col mobile:flex-col">
        {/* section-top-left */}

        <div className="w-1/4 tablet:flex tablet:justify-center tablet:items-center tablet:w-full mobile:w-full ">
          <img className="w-full rounded-lg" src={assets.about_image} alt="image" />
        </div>

        {/* section-top-right */}

        <div className="px-10 w-3/4  flex flex-col gap-4 justify-center tablet:w-full tablet:py-5 tablet:px-0 mobile:w-full mobile:px-2 mobile:py-5">
          <p className="text-sm text-slate-700">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p className="text-sm text-slate-700">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-bold">Our Vision</p>
          <p className="text-sm text-slate-700">
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      {/*Section bottom */}

      <div>
        <h2 className="my-5 text-lg font-medium text-slate-600">
          Why <span className="text-black">Choose Us</span>
        </h2>
        <div className="flex mobile:flex-col">
          <div className="p-10 border border-black tablet:p-5 mobile:p-5">
            <h2 className="text-[16px] font-medium my-2 ">Efficiency:</h2>
            <p className="text-sm text-slate-700">
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="p-10 border border-black tablet:p-5 mobile:p-5 ">
            <h2 className="text-[16px] font-medium my-2">Convenience:</h2>
            <p className="text-sm text-slate-700">
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="p-10  border border-black tablet:p-5  mobile:p-5 ">
            <h2 className="text-[16px] font-medium my-2"> Personalization:</h2>
            <p className="text-sm text-slate-700">
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
