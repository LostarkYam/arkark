import React from 'react';
import BTSkill from './btskill/btskill';
import BTPassive from './btpassive/btpassive';
import './buildtree.css';
import { Row, Col } from 'reactstrap';
import { getAllSkills  } from '../../util/admin/apiskill';
import { getAllPassives  } from '../../util/admin/apipassive';
import { Link } from 'react-router-dom';

class BuildTree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            passives: [],
            currentClass: this.props.location.pathname.split('/')[2],
            dropdownOpen: false
        };
    }

    componentDidMount(){
        // Have to filter Class once I have enough data
        // switch(this.state.currentClass){
        //     case('warrior'):

        //         break;
        //     case('hunter'):

        //         break;
        //     case('fighter'):

        //         break;
        //     case('magician'):

        //         break;
        // }
        getAllPassives().then(res => {
            console.log(res.data);
            this.setState({passives: res.data});
          }).catch(error => console.log(error));
        getAllSkills().then(res => {
            console.log(res.data);
            this.setState({skills: res.data});
        }).catch(error => console.log(error));
    }

  render(){
      console.log(this.state.currentClass);
      return(
        <div className="bt-container">

            <Row className="row-tree">
                <Col md="8" className="col-skill">
                    skills
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>
                    <BTSkill></BTSkill>

                </Col>
                <Col md="4"className="col-passive">
                    passive
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                    <BTPassive></BTPassive>
                </Col>
            </Row>
        </div>
      );
  }
}
export default BuildTree;