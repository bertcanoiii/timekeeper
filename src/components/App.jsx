import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
        <h1 className={styles.test}>Test</h1>
      <Footer />
    </div>
  );
}

export default App;
