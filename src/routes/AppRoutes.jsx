import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

// import About from "../pages/About";
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
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/partners" element={<ContactUs />} /> */}
          {/* <Route path="/contact-us" element={<Contact />} /> */}
          {/* <Route path="/services" element={<Dialer />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
