import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


const Navbar = props => {
  return (
    <header className="Navbar_Header">
      <nav className="Navbar_Navigation">
        <Link to="/" className="Navbar_logo">
          <img src={props.src} alt="Logo" />
        </Link>
        <ul className="Navbar_ul">
          <li className="Navbar_li">
            <Link to="/" className={`Navbar_iconHome ${props.color}`}>
            <svg  width="49.56px" height="40px"
                viewBox="0 0 49.56 40"><path d="M19.53,8.92V6.06H15.48v6.37l-4.43,3.85v20.2H38.89V16.28L24.78,4.35Zm8,25.95H22.38v-8.4h5.19ZM37.29,17V34.87h-8V24.8H20.71V34.87h-8V17L24.8,6.47Z"/></svg>
            </Link>
          </li>

          <li className="Navbar_li">
            <Link to="/meal" className={props.color}>
            <svg width="49.56px" height="40px" viewBox="0 0 49.56 40"><path d="M25,9.11A13.25,13.25,0,1,0,38.26,22.35,13.26,13.26,0,0,0,25,9.11Zm0,25A11.78,11.78,0,1,1,36.8,22.35,11.79,11.79,0,0,1,25,34.13Z"/><path d="M10,5.12V12H7.86V5.12H6.5V12H4.27l0-6.8V5.12H2.94l0,6.94v1.35a3,3,0,0,0,.9,2.15l.86.86-1,17.1a.31.31,0,0,0,0,.1v.09a3.24,3.24,0,0,0,3.23,3.23H7a3.25,3.25,0,0,0,3.14-3.32L9.6,16.43l.87-.87a3,3,0,0,0,.89-2.16V5.12Zm0,8.29a1.71,1.71,0,0,1-.49,1.19L8.42,15.68a.68.68,0,0,0-.2.5l.52,17.47A1.87,1.87,0,1,1,5,33.73a.46.46,0,0,0,0-.1v0L6,16.2a.68.68,0,0,0-.2-.52L4.76,14.6a1.69,1.69,0,0,1-.49-1.2v0H10Z"/><path d="M31.81,19.41a7.6,7.6,0,0,1,.62,2.94A7.41,7.41,0,1,1,25,14.94a6,6,0,0,1,.74.06l.39-1.44A7.78,7.78,0,0,0,25,13.47a8.94,8.94,0,1,0,8,5Z"/><path d="M45.41,23.17l.74-.93A3.19,3.19,0,0,0,46.82,20l-.1-1.34,0-.14h0L45.33,10a21.66,21.66,0,0,0-.43-2.7c-.31-1.58-1.34-2.65-2.47-2.57a1.76,1.76,0,0,0-1.68,1.91l-.07,27.13v.11s0,.06,0,.08a3.26,3.26,0,0,0,1.13,2.26,2.94,2.94,0,0,0,1.92.72h.33a3.23,3.23,0,0,0,2.71-3.58ZM42.08,9l0-2.36c0-.36.06-.55.4-.57h0c.35,0,.94.52,1.16,1.66h0L45.38,19l.09,1.16a1.65,1.65,0,0,1-.36,1.2l-.89,1.12-2.17,0Zm1.8,26.52a1.71,1.71,0,0,1-1.21-.4A1.84,1.84,0,0,1,42,33.91a.48.48,0,0,0,0-.12l0-9.88,2.09,0,1.3,9.66A1.81,1.81,0,0,1,43.88,35.56Z"/></svg>
            </Link>
          </li>
          <li className="Navbar_li">
            <Link to="/calculation" className={props.color}>
            <svg  width="49.56px" height="40px" viewBox="0 0 49.56 40"><path d="M35.49,4.69H14a1.78,1.78,0,0,0-1.78,1.78V34.75A1.78,1.78,0,0,0,14,36.53H35.49a1.78,1.78,0,0,0,1.78-1.78V6.47A1.78,1.78,0,0,0,35.49,4.69Zm.22,30.06a.22.22,0,0,1-.22.22H14a.21.21,0,0,1-.21-.22V6.47A.21.21,0,0,1,14,6.26H35.49a.21.21,0,0,1,.22.21Z"/><rect x="17.32" y="28.95" width="3.13" height="3.14"/><rect x="23.18" y="28.95" width="3.14" height="3.14"/><rect x="29.04" y="23.3" width="3.14" height="8.79"/><rect x="17.32" y="23.3" width="3.13" height="3.14"/><rect x="23.18" y="23.3" width="3.14" height="3.14"/><rect x="17.32" y="17.64" width="3.13" height="3.14"/><rect x="23.18" y="17.64" width="3.14" height="3.14"/><rect x="29.04" y="17.64" width="3.14" height="3.14"/><path d="M16.82,14.54H32.68V9.08H16.82Zm1.37-3.93H31.3V13H18.19Z"/></svg>
            </Link>
          </li>

          <li className="Navbar_li">
            <Link to="/news" className={props.color}>
            <svg  width="49.56px" height="40px" viewBox="0 0 49.56 40"><rect x="15.99" y="31.1" width="14.91" height="1.49"/><rect x="15.99" y="27.41" width="14.91" height="1.49"/><rect x="15.99" y="23.5" width="14.91" height="1.49"/><path d="M35.79,15V4.64H11.15V34.35A2.83,2.83,0,0,0,14,37.15H37.17A2.83,2.83,0,0,0,40,34.35V15ZM14,35.69a1.35,1.35,0,0,1-1.37-1.34V6.1h21.7V34.35a2.72,2.72,0,0,0,.34,1.34Zm24.54-1.34a1.37,1.37,0,0,1-2.74,0V16.45h2.74Z"/><path d="M23.18,20.54a5.78,5.78,0,1,0-5.77-5.77A5.78,5.78,0,0,0,23.18,20.54Zm0-10a4.24,4.24,0,1,1-4.24,4.24A4.24,4.24,0,0,1,23.18,10.53Z"/></svg>
            </Link>
          </li>

          <li className="Navbar_li">
            <Link to="/nutritioninfo" className={props.color}>
            <svg  width="49.56px" height="40px" viewBox="0 0 49.56 40"><path d="M32.37,16A9.13,9.13,0,0,0,24,14.84a9,9,0,0,0-8.33.88A10.53,10.53,0,0,0,11.5,24.5a12.54,12.54,0,0,0,25.08,0A10.35,10.35,0,0,0,32.37,16ZM24,35.29A10.93,10.93,0,0,1,13,24.5,9,9,0,0,1,16.57,17a6.94,6.94,0,0,1,4-1.22,9.1,9.1,0,0,1,3.2.61l.26.1.26-.09a7.69,7.69,0,0,1,7.21.82,8.88,8.88,0,0,1,3.57,7.32A10.93,10.93,0,0,1,24,35.29Z"/><path d="M24.23,12.94c.18,0,4.53-.07,7.28-2.35A8.34,8.34,0,0,0,34.3,4.44V3.69h-.75c-.18,0-4.53.06-7.28,2.34a8.41,8.41,0,0,0-2.79,6.15V13Zm3-5.73a10.59,10.59,0,0,1,5.49-1.94,6.61,6.61,0,0,1-2.18,4.16,10.77,10.77,0,0,1-5.49,1.94A6.59,6.59,0,0,1,27.23,7.21Z"/><path d="M24.89,22.83a.06.06,0,0,0,0,0v-.12H22.06v1.62h1.19v5.2h-2v1.63h5.26V29.48H24.89Z"/><path d="M24.1,21.34a1.08,1.08,0,0,0,.79-.3,1,1,0,0,0,.31-.77,1,1,0,0,0-.31-.76,1.08,1.08,0,0,0-.79-.3,1.09,1.09,0,0,0-.79.3,1,1,0,0,0-.3.76,1,1,0,0,0,.3.77A1.09,1.09,0,0,0,24.1,21.34Z"/></svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
