import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import WarlordImg from './warlord.png';
import BerserkerImg from './berserker.png';
import DestroyerImg from './destroyer.png';
import WarriorImg from './warrior.png';
import '../guidesintro.css';

class Warrior extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello This is warrior page</h1>
            <p>
                Please Select your class below.
            </p>
            <div className='guides-links'>
            <div><Link to={'/'}><img src={WarriorImg} alt=""/><p className="guides-text">All Guides</p></Link></div>
            <div><Link to={'/guides/warrior/berserker'}><img src={BerserkerImg} alt="" /><p className="guides-text">Berserker</p></Link></div>
            <div><Link to={'/guides/warrior/warlord'}><img src={WarlordImg} alt="" /><p className="guides-text">Warlord</p></Link></div>
            <div><Link to={'/guides/warrior/destroyer'}><img src={DestroyerImg} alt="" /><p className="guides-text">Destroyer</p></Link></div>
            </div>
        </Jumbotron>
      );
  }
}
export default Warrior;