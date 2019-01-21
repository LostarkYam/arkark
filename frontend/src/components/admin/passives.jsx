import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Passives extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>This Tab is for Passives!</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p>
            <Button color="primary">Learn more</Button>
            </p>
        </Jumbotron>
      );
  }
}
export default Passives;