import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm(
        "service_f0h2pc6",
        "template_03fg1bk",
        form.current,
        "6YH1spepz7xVW_iap"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I am always eager to learn and experience more. Whether for
            freelancing or hire,
            <br /> I am interested in any opportunities. For any questions,
            requests or concerns, don't <br />
            hesitate to contact me using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Gabriel Ruiz
          <br />
          Miami, Fl
          <br />
          United States
          <br />
          <span>garuizbido@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[25.708883110401665, -80.28583606024401]}
            zoom={12}
            scrollWheelZoom={false}
            zoomControl={false}
            dragging={false}
            doubleClickZoom={false}
            touchZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.708883110401665, -80.28583606024401]} />
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Contact;
