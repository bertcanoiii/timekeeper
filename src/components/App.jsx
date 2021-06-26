import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import TimeKeepingForm from "./TimeKeepingForm";
import styles from "./app.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />
      <TimeKeepingForm />
      <Footer />
    </div>
  );
}

export default App;
