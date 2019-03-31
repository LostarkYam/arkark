import React from 'react';
import { Jumbotron, Button, Modal, 
  ModalHeader, ModalBody, ModalFooter,
  Form, Col, Label, FormGroup, Input} from 'reactstrap';
import './skillsitem.css';
import SkillItem from './skillitem';
import { createSkill, getAllSkills,  } from '../../../util/admin/apiskill';

class Skills extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filtered: [],
      name: '', description: '', acquired_level: '', cooldown: '', effect: '', mana_cost: '', skill_type: '',
      modal: false,
      dropdownOpen: false,
      error: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.updateList = this.updateList.bind(this);
  }
  componentDidMount(){
    // Get all the classes from the backend
    getAllSkills().then(res => {
      console.log(res.data);
      this.setState({data: res.data, filtered: res.data});
    }).catch(error => console.log(error));
  }
  // Toggles for drop down and Modals
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    let newskill = { name: this.state.name, description: this.state.description, 
                      skill_type: this.state.skill_type, mana_cost: this.state.mana_cost, effect: this.state.effect,
                        cooldown: this.state.cooldown, acquired_level: this.state.acquired_level };
    let oldstate = this.state.data;
    let newid = 0;
    createSkill(newskill).then((res) => {
      newid = res.data.id;
      newskill.id = newid;
      oldstate.push(newskill);
      this.setState({ name: '', description: '', acquired_level: '', cooldown: '', effect: '', mana_cost: '', skill_type: '', data: oldstate});
    }); 
 }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  updateList() {
    getAllSkills().then(res => {
        console.log(res.data);
        this.setState({data: res.data, filtered: res.data});
      }).catch(error => console.log(error));
  }
  handleSearch(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.data;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.data;
    }
    this.setState({
      filtered: newList
    });
  }
  render(){
    return(
      <Jumbotron>
            <h1>Current Skills in Lost Ark</h1>
            <Button color="primary" className="button-margin" onClick={this.toggle}>Add new Skill</Button>
            <div className="search-box">
              <input className="input-radius" onChange={this.handleSearch} type="text" placeholder="Search Passive Skills" />
            </div>
            {/*         Modal for Skills             */}
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <Form onSubmit={this.onFormSubmit}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
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
                  <Button color="primary" type="Submit" onClick={this.toggle}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
            <Col className='rows-cards'> 
                {this.state.filtered.map((cl) => {
                  return <SkillItem className='rows-cards' key={cl.id} name={cl.name} description={cl.description} cooldown={cl.cooldown} 
                            effect={cl.effect} mana_cost={cl.mana_cost} acquired={cl.acquired_level} updateList={this.updateList}
                            skill_type={cl.skill_type} classId={cl.id}></SkillItem>
                })}            
            </Col>
        </Jumbotron>
      );
  }
}
export default Skills;