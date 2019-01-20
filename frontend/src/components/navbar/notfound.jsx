import React from 'react';
import { Jumbotron } from 'reactstrap';

class NotFound extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Sorry, Lost Ark Page was not Found!!</h1>
            <p>
              The page you are looking for was not found. Please go back to the home page.
            </p>
        </Jumbotron>
      );
  }
}
export default NotFound;