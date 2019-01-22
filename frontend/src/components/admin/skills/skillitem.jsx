import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

class SkillItem extends React.Component {
  render(){
      return(
        <div className="card-total">
            <Card>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
                Skill Type:
                <CardText>{this.props.skill_type}</CardText>
                Effect:
                <CardText>{this.props.effect}</CardText>
                Cooldown:
                <CardText>{this.props.cooldown}</CardText>
                Mana Cost:
                <CardText>{this.props.mana_cost}</CardText>
                Acquired Level:
                <CardText>{this.props.acquired}</CardText>
                <Button>More Info</Button>
            </CardBody>
            </Card>
        </div>
      );
  }
}
export default SkillItem;