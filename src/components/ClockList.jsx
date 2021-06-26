import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ClockListItem from "./ClockListItem";

function ClockList(props){
  return(
    <ListGroup>
      {props.punchTimes.map(punch => {
        return(
          <ClockListItem punchTime={punch} />
        )
      })}
    </ListGroup>
  )
}

export default ClockList;