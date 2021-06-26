import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function ClockListItem(props){
  return (
    <ListGroup.Item>{props.punchTime}</ListGroup.Item>
  )
}

export default ClockListItem;