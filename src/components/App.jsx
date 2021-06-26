import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import TimeKeepingForm from "./TimeKeepingForm";
import ClockList from "./ClockList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [ punches, setPunches ] = useState([])

  function addPunches(time){
      setPunches(prevValues => [
        ...prevValues,
          time
    ])
    console.log(punches);
  }


  return (
    <div>
      <Header />
      <TimeKeepingForm onAdd={addPunches} />
      <ClockList punchTimes={punches}/>
      <Footer />
    </div>
  );

}

export default App;
