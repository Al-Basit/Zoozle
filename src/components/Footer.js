import React from "react";
import "../assets/styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__upperPortion">
        <p>Pakistan</p>
      </div>
      <div className="footer__lowerPortion">
        <div className="footer__leftLinks">
          <Link href="/">About</Link>
          <Link href="/">Advertising</Link>
          <Link href="/">Business</Link>
          <Link href="/">How Search Works</Link>
        </div>
        <div className="footer__rightLinks">
          <Link href="/">Privacy</Link>
          <Link href="/">Terms</Link>
          <Link href="/">Settings</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
