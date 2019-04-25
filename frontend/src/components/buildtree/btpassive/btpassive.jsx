import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class BTPassive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: []
        };
    }
    componentDidMount(){
        // Fix
        // let descrip = this.props ? Object.keys(this.props.skills): '';
        // descrip = descrip.splice(descrip.indexOf('id'),1);
        // descrip ? this.setState({labels: descrip}) : descrip = '';
    }
  render(){
      return(
        <div>
            <Card>
                <CardBody>
                <CardTitle>Card Passive</CardTitle>
                <CardSubtitle>Card Passive</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
            </Card>
        </div>
      );
  }
}
export default BTPassive;