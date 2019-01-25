import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import HunterImg from './hunter.png';
import DevilHunterImg from './devilhunter.png';
import HawkEyeImg from './hawkeye.png';
import Blaster from './blaster.png';
import '../guidesintro.css';

class Hunter extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello This is Hunter page</h1>
            <p>
                Please Select your class below.
            </p>
            <div className='guides-links'>
            <div><Link to={'/guides/warrior/berserker'}><img src={HunterImg} alt=""/><p className="guides-text">All Guides</p></Link></div>
            <div><Link to={'/guides/warrior/berserker'}><img src={DevilHunterImg} alt="" /><p className="guides-text">Devil Hunter</p></Link></div>
            <div><Link to={'/admin/skills'}><img src={Blaster} alt="" /><p className="guides-text">Blaster</p></Link></div>
            <div><Link to={'/admin/passives'}><img src={HawkEyeImg} alt="" /><p className="guides-text">Hawk Eye</p></Link></div>
            </div>
        </Jumbotron>
      );
  }
}
export default Hunter;