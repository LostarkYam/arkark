import React from 'react';
import { Jumbotron } from 'reactstrap';
import SkillItem from './skillitem';
import { getAllSkills } from '../../../util/admin/apiskill';

class Skills extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      error: ''
    }
  }
  componentDidMount(){
    // Get all the classes from the backend
    getAllSkills().then(res => {
      console.log(res.data);
      this.setState({data: res.data});
    }).catch(error => console.log(error));
  }
  render(){
    return(
      <Jumbotron>
            <h1>Current Classes in Lost Ark</h1>
        {this.state.data.map((cl) => {
          return <SkillItem key={cl.id} name={cl.name} description={cl.description} cooldown={cl.cooldown} 
                    effect={cl.effect} mana_cost={cl.mana_cost} acquired={cl.acquired_level}
                    skill_type={cl.skill_type}></SkillItem>
        })}
        </Jumbotron>
      );
  }
}
export default Skills;