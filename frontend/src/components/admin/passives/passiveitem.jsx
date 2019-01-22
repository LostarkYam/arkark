import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class PassiveItem extends React.Component {
  render(){
      return(
        <div className="card-total">
            <Card>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <Button>More Info</Button>
            </CardBody>
            </Card>
        </div>
      );
  }
}
export default PassiveItem;