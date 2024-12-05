import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import VerifyUser from "./pages/VerifyUser";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Appointment from "./pages/Appointment";
import MyProfile from "./pages/MyProfile";
import MyAppointment from "./pages/MyAppointment";
import DoctorLayout from "./layout/DoctorLayout";
import DoctorSignin from "./pages/DoctorSignin";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="doctors" element={<Doctors/>} />
        <Route path="doctors/:speciality" element={<Doctors/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="appointment/:docId" element={<Appointment/>} />
        <Route path="profile" element={<MyProfile/>} />
        <Route path="my-appointment" element={<MyAppointment/>} />
  
      </Route>
      <Route path="auth" element={<AuthLayout/>}>
         <Route path="signin" element={<Signin/>}/>
         <Route path="signup" element={<Signup/>}/>
         <Route path="verify" element={<VerifyUser/>}/>
         <Route path="forgot-password" element={<ForgotPassword/>}/>
         <Route path="reset-password/:token" element={<ResetPassword/>}/>
      </Route>

      <Route path="doctor" element={<DoctorLayout/>}>
        <Route path="signin" element={<DoctorSignin/>}/>
      </Route>

       </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
