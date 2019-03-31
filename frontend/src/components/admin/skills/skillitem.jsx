import React from 'react';
import { Card, CardImg, CardBody, Modal, ModalHeader,
          ModalBody, ModalFooter, CardTitle, 
          CardText, Button,Form, Col, Label, 
          FormGroup, Input } from 'reactstrap';
import { deleteSkill, editSkill } from '../../../util/admin/apiskill';

class SkillItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: this.props.name, description: this.props.description, acquired_level: this.props.acquired_level, 
      cooldown: this.props.cooldown, effect: this.props.effect, mana_cost: this.props.mana_cost, skill_type: this.props.skill_type,
      modaledit: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggledit = this.toggledit.bind(this);
    this.editSkills = this.editSkills.bind(this);
  }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  editSkills(e) {
    e.preventDefault();
    let skill = { id: this.props.classId, name: this.state.name, description: this.state.description};
    editSkill(skill).then( () => {
      this.props.updateList();
  });
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggledit() {
    this.setState(prevState => ({
      modaledit: !prevState.modaledit
    }));
  }
  removeSkill(id) {
    deleteSkill(id).then( () => {
        this.props.updateList();
    });
  }
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
                <Button color="danger" onClick={this.toggle} >Delete</Button>
                  <Button color="info" onClick={this.toggledit} >Update</Button>
            </CardBody>
            </Card>
             {/*         Modal for Edit Skills             */}
             <Modal isOpen={this.state.modaledit} toggle={this.toggledit} className={this.props.className}>
              <Form onSubmit={this.editSkills}>
                <ModalHeader toggle={this.toggledit}>Modal title</ModalHeader>
                <ModalBody>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Skill Name:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.name} name="classname" 
                        onChange={this.update('name')} id="classname" placeholder="Enter Class Name..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="description" sm={3}>Description:</Label>
                    <Col sm={9}>
                      <Input type="textarea" value={this.state.description} name="description" 
                      onChange={this.update('description')} id="description" placeholder="Enter Description..."/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Skill Type:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.skill_type} name="classname" 
                        onChange={this.update('skill_type')} id="classname" placeholder="Enter Skill Type..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="classname" sm={2}>CoolDown:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.cooldown} name="classname" 
                        onChange={this.update('cooldown')} id="classname" placeholder="Enter Cooldown..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Effect:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.effect} name="classname" 
                        onChange={this.update('effect')} id="classname" placeholder="Enter Effect..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Mana Cost:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.mana_cost} name="classname" 
                        onChange={this.update('mana_cost')} id="classname" placeholder="Enter Mana..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Acquired Level:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.acquired_level} name="classname" 
                        onChange={this.update('acquired_level')} id="classname" placeholder="Enter Acquired Level..." />
                    </Col>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="Submit" onClick={this.toggledit}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggledit}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
            {/* Modal for Confirm Delete */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} >
              <ModalBody>
                Are you sure you want to delete this??
              </ModalBody>
              <ModalFooter>
              <Button color="danger" onClick={() => this.removeSkill(this.props.classId)} >Delete</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
        </div>
      );
  }
}
export default SkillItem;