import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import './Contact.css'

// --- Contact Component (Fully Responsive using Tailwind CSS) ---
function Contact() {
  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      label: "Our Address",
      details: "Okhla, New Delhi, India",
      action: () => window.open("https://www.google.com/maps", "_blank"),
    },
    {
      icon: FaEnvelope,
      label: "Mail Us",
      details: "abc123@gmail.com",
      action: () => window.open("mailto:abc123@gmail.com"),
    },
    {
      icon: FaPhoneAlt,
      label: "Call Us",
      details: "+91 9408348329",
      action: () => window.open("tel:9408348329"),
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      details: "+91 9408348329",
      action: () => window.open("https://wa.me/9408348329", "_blank"),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted!");
  };

  // Google Maps Embed URL with a simple custom style for a dark/grayscale look
  // Note: True dark theme requires an API key and a defined map ID,
  // but adding a style parameter can achieve a high-contrast, non-default look.
  
  return (
    // Use the .contact-section class to allow Navbar scrolling functionality
    <section
      className="contact-section w-full py-16 lg:py-24"
      id="contact"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Get in Touch
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Let's build something amazing together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Form Box (Left Side) */}
          <form
            className="w-full lg:w-1/2 p-6 md:p-10 bg- rounded-xl shadow-2xl border border-gray-800"
            onSubmit={handleSubmit}
          >
            <p className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </p>

            {/* Form Fields */}
            <div className="grid grid-cols-1 gap-6">
              {/* First Name */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">
                  FIRST NAME
                </p>
                <input
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                  name="FirstName"
                  placeholder="Please enter first name..."
                  required
                />
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">EMAIL</p>
                <input
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                  name="Email"
                  type="email"
                  placeholder="Please enter email..."
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">
                  PHONE NUMBER
                </p>
                <input
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition"
                  name="PhoneNumber"
                  type="tel"
                  placeholder="Please enter phone number..."
                />
              </div>

              {/* Message */}
              <div>
                <p className="text-sm font-medium text-gray-400 mb-1">
                  WHAT DO YOU HAVE IN MIND ?
                </p>
                <textarea
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition h-32 resize-none"
                  placeholder="Please enter query..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-8 group relative flex items-center justify-center bg-[#b4b7ba] text-black h-12 w-40 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden cursor-pointer hover:bg-green-100"
            >
              <span className="group-hover:-translate-x-3 transition-transform duration-300">
                Submit
              </span>
              <span className="absolute translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 translate-y-[1px] transition-all duration-300 text-sm">
                ➜
              </span>
            </button>
          </form>

          {/* Contact Info and Map (Right Side) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            <p className="text-2xl font-semibold text-white">Reach us at</p>

            {/* Reach Items (Responsive Grid) */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-gray-800 hover:border-green-400 transition duration-300 cursor-pointer"
                  onClick={item.action}
                >
                  <item.icon className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-400">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold break-all">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Box (Responsive) */}
            <div className="map-box w-full h-80 rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.356405002538!2d77.27178938000037!3d28.560916538430774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4751aa3f39f%3A0x5c10ed47eba39c7d!2sOkhla%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740044930394!5m2!1sen!2sin&style=feature:all|element:labels|visibility:off&style=feature:all|element:geometry|color:0x1e1e1e"
                className="w-full h-full  "
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
