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
    <div class="contact_us_6 contact ">
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
            <div class="map-part">
            <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
              Reach us at
            </p>
            <div className="reach">
              <div
                className="reach-item"
                onClick={() =>
                  window.open("https://www.google.com/maps", "_blank")
                }
              >
                <FaMapMarkerAlt className="icon text-[#821a14]" />
                <p>Our Address</p>
              </div>
              <div
                className="reach-item"
                onClick={() => window.open("mailto:abc123@gmail.com")}
              >
                <FaEnvelope className="icon" />
                <p>Mail Us</p>
              </div>
              <div
                className="reach-item"
                onClick={() => window.open("tel:9408348329")}
              >
                <FaPhoneAlt className="icon " />
                <p>9408348329</p>
              </div>
              <div
                className="reach-item"
                onClick={() =>
                  window.open("https://wa.me/9408348329", "_blank")
                }
              >
                <FaWhatsapp className="icon" />
                <p>WhatsApp</p>
              </div>
            </div>

            {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <div class="map-box container-block">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.356405002538!2d77.27178938000037!3d28.560916538430774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4751aa3f39f%3A0x5c10ed47eba39c7d!2sOkhla%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1740044930394!5m2!1sen!2sin2sin"
                // width="600"
                // height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          </div>
        </form>
      
      </div>
    </div>
  );
}

export default Contact;
