import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserSignup = React.lazy(() => import("pages/UserSignup"));
const Useraccountpending = React.lazy(() => import("pages/Useraccountpending"));
const UserLogin = React.lazy(() => import("pages/UserLogin"));
const Five = React.lazy(() => import("pages/Five"));
const FiveOne = React.lazy(() => import("pages/FiveOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/fiveone" element={<FiveOne />} />
          <Route path="/five" element={<Five />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/useraccountpending" element={<Useraccountpending />} />
          <Route path="/usersignup" element={<UserSignup />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
