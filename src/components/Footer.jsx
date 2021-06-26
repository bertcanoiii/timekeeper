import React from "react";
import styles from "./footer.module.css";

function Footer(props){
  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <p className={styles.copyright}>@Copyright {currentYear}</p>
    </footer>
  )
}

export default Footer;