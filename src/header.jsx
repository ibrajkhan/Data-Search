import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CahoIcon from "../src/assets/Img/M&M.png";
import BluePine from "../src/assets/Img/Asset1.png";

import "./header.css";

function Headers() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const [navbarBackground, setNavbarBackground] = useState("#20428D");

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const position = window.scrollY;
  //     setScrollPosition(position);

  //     if (position > 50) {
  //       setNavbarBackground("#89a3b3ff"); // Change to red background when scrolled past 50px
  //     } else {
  //       setNavbarBackground("#89a3b3ff"); // Transparent background at top
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: navbarBackground,
        borderBottom: "2px solid orange",
        transition: "background-color 0.3s ease",
      }}
      className="header_main montaga-regulars">
      <Container>
        <Nav className="me-auto">
          <Navbar.Brand className="header">
            <img
              src={BluePine}
              alt="Caho_Diagnostion_Icon"
              className="ImgLogo"
            />
          </Navbar.Brand>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Headers;
