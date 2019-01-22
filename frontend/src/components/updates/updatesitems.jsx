import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './updatesitems.css';


const UpdatesItems = (props) => {
  return (
    <div className="card-total">
      <Card body>
        <CardTitle className="text-left">{props.title}</CardTitle>
        <CardText className="text-left">{props.description}</CardText>
        <Button className="card-button">Go somewhere</Button>
      </Card>
    </div>
  );
};



export default UpdatesItems;