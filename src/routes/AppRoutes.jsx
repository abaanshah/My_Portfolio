import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

// import AboutMe from "../components/AboutMe";
// import Contact from "../pages/Contact";
import MainLayout from "../layouts/MainLayout";
// import Dialer from "../pages/Dialer";
// import ContactUs from "../pages/ContactUs";
// import { Contact } from "lucide-react";

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
