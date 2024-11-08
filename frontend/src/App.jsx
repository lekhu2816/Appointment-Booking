import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import Signin from "./pages/signin";
import Signup from "./pages/Signup";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="auth" element={<AuthLayout/>}>
         <Route path="signin" element={<Signin/>}/>
         <Route path="signup" element={<Signup/>}/>
      </Route>
       </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
