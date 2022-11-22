import React from "react";
import logo_0 from "../assets/logo/logo_0.png";
import logo_sayna from "../assets/logo/logo_1.png";
import logo_x from "../assets/logo/logo_2.png";
import logo_dc from "../assets/logo/logo_3.png";
import logo_fb from "../assets/icones/facebook.png";
import logo_ig from "../assets/icones/instagram.png";
import logo_tw from "../assets/icones/twitter.png";
import "../styles/footer.scss";

function Footer() {
  return (
    <footer>
      <div id="copy">
        <img src={logo_0} alt="wb" />
        <span>
          Ce projet respecte l’univers cinématographique des films Superman.
        </span>
      </div>
      <div>
        <img src={logo_sayna} alt="logo_sayna" />
        <img src={logo_x} alt="logo_x" />
        <img src={logo_dc} alt="logo_dc" />
        <img src={logo_fb} alt="logo_fb" />
        <img src={logo_ig} alt="logo_ig" />
        <img src={logo_tw} alt="logo_tw" />
      </div>
    </footer>
  );
}

export default Footer;
