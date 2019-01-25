import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import MagicianImg from './magician.png';
import Bard from './bard.png';
import Arcana from './arcana.png';
import Summoner from './summoner.png'
import '../guidesintro.css';

class Magician extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello This is Magician page</h1>
            <p>
                Please Select your class below.
            </p>
            <div className='guides-links'>
            <div><Link to={'/'}><img src={MagicianImg} alt=""/><p className="guides-text">All Guides</p></Link></div>
            <div><Link to={'/guides/magician/bard'}><img src={Bard} alt="" /><p className="guides-text">Bard</p></Link></div>
            <div><Link to={'/guides/magician/summoner'}><img src={Summoner} alt="" /><p className="guides-text">Summoner</p></Link></div>
            <div><Link to={'/guides/magician/arcana'}><img src={Arcana} alt="" /><p className="guides-text">Arcana</p></Link></div>
            </div>
        </Jumbotron>
      );
  }
}
export default Magician;