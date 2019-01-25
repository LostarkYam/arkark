import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import WarlordImg from './warlord.png';
import BerserkerImg from './berserker.png';
import DestroyerImg from './destroyer.png';
import WarriorImg from './warrior.png';
import './warrior.css';

class Warrior extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello This is warrior page</h1>
            <p>
                Please Select your class below.
            </p>
            <div className='warrior-links'>
            <div><Link to={'/guides/warrior/berserker'}><img src={WarriorImg} alt=""/><p className="warrior-text">Warrior</p></Link></div>
            <div><Link to={'/guides/warrior/berserker'}><img src={BerserkerImg} alt="" /><p className="warrior-text">Berserker</p></Link></div>
            <div><Link to={'/admin/skills'}><img src={WarlordImg} alt="" /><p className="warrior-text">Warlord</p></Link></div>
            <div><Link to={'/admin/passives'}><img src={DestroyerImg} alt="" /><p className="warrior-text">Destroyer</p></Link></div>
            </div>
        </Jumbotron>
      );
  }
}
export default Warrior;