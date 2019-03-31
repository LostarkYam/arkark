import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import FighterImg from './fighter.png';
import BattleMasterImg from './battlemaster.png';
import InfighterImg from './infighter.png';
import SoulMasterImg from './soulmaster.png';
import '../guidesintro.css';

class Fighter extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello This is Fighter page</h1>
            <p>
                Please Select your class below.
            </p>
            <div className='guides-links'>
            <div><Link to={'/guides/warrior/berserker'}><img src={FighterImg} alt=""/><p className="guides-text">All Guides</p></Link></div>
            <div><Link to={'/guides/warrior/berserker'}><img src={BattleMasterImg} alt="" /><p className="guides-text">Battle Master</p></Link></div>
            <div><Link to={'/admin/skills'}><img src={InfighterImg} alt="" /><p className="guides-text">Infighter</p></Link></div>
            <div><Link to={'/admin/passives'}><img src={SoulMasterImg} alt="" /><p className="guides-text">Soul Master</p></Link></div>
            </div>
        </Jumbotron>
      );
  }
}
export default Fighter;