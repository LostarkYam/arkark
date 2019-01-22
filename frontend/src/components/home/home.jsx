import React from 'react';
import HomeCarousel from './homecarousel';
import './homecarousel.css';
import { Jumbotron, Button } from 'reactstrap';

class Home extends React.Component {
  render(){
      return(
        <Jumbotron>
          <div className="home-carousel">
          <HomeCarousel />
          </div>
         
          <div>
          <h1>Hello, Lost Ark World!</h1>
            <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
            </p>
            <p>
            <Button color="primary">Learn more</Button>
            </p>
          </div>
        </Jumbotron>
      );
  }
}

export default Home;




