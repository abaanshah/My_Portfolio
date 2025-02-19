import React from "react";
import "./Contact.css";
// import ContactBtn from "@/components/ContactBtn";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
// import { FaWhatsapp } from 'react-icons/fa';
function Contact() {
  return (
    <div class="contact_us_6 ">
      <div class="responsive-container-block container">
        <form class="form-box">
        <h2 className="">
          Contact Us
        </h2>
          <div class="container-block form-wrapper ">
              {/* <p class="text-blk contactus-subhead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
                diam lectus sapien.
              </p> */}
            <div class="responsive-container-block" id="i2cbk">
              <p class="text-blk contactus-head">Get in Touch</p>
              <div
                class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                id="i10mt-3"
              >
                <p class="text-blk input-title">FIRST NAME</p>
                <input
                  class="input"
                  id="ijowk-3"
                  name="FirstName"
                  placeholder="Please enter first name..."
                />
              </div>
              <div
                class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                id="ip1yp"
              >
                <p class="text-blk input-title">EMAIL</p>
                <input
                  className="input"
                  id="ipmgh-3"
                  name="Email"
                  placeholder="Please enter email..."
                />
              </div>
              <div
                className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                id="ih9wi"
              >
                <p class="text-blk input-title">PHONE NUMBER</p>
                <input
                  className="input"
                  id="imgis-3"
                  name="PhoneNumber"
                  placeholder="Please enter phone number..."
                />
              </div>
              <div
                class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                id="i634i-3"
              >
                <p class="text-blk input-title">WHAT DO YOU HAVE IN MIND ?</p>
                <textarea
                  className="textinput"
                  id="i5vyy-3"
                  placeholder="Please enter query..."
                  style={{ color: "#c0c0c1" }}
                ></textarea>
              </div>
            <button className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
              Submit
            </button>
            </div>
      <div className="contactimg">
        <img src="https://www.shutterstock.com/image-photo/contact-us-help-centre-customer-600nw-2067798464.jpg" alt="" />
      </div>
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default Contact;
