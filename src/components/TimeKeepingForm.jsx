import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TimeKeepingForm(props){

  const currentTime = new Date().toLocaleTimeString();
  const [clockTime, setClockTime] = useState(currentTime);

  useEffect(()=> {
      const interval = setInterval(() => setClockTime(new Date().toLocaleTimeString()), 1000);
      return (() => {
        clearInterval(interval)
      });
    }, []);

  return(
    <Card>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly defaultValue="bertcanoiii" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Current Time</Form.Label>
          <Form.Control type="text" placeholder="" value={clockTime} />
        </Form.Group>
        <Button
          onClick={()=>{
            props.onAdd(clockTime);
          }}
          variant="primary"
        >
          Clock-In
        </Button>
      </Form>
    </Card>
  )
}

export default TimeKeepingForm;