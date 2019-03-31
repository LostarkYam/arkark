import React from 'react';
import { Jumbotron, Button, Modal, 
  ModalHeader, ModalBody, ModalFooter,
  Form, Col, Label, FormGroup,
  Input } from 'reactstrap';
import ClassItem from './classitem';
import { getAllClasses, createClass } from '../../../util/admin/apiclass';

class Classes extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      name: '', description: '', classtype: 'Warrior',
      modal: false,
      dropdownOpen: false,
      error: ''
    }

    this.toggle = this.toggle.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.updateList = this.updateList.bind(this);
  }

  // Toggles for drop down and Modals
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
 // END of Toggles
 onFormSubmit(e) {
    e.preventDefault();
    let newclass = { name: this.state.name, description: this.state.description, classtype: this.state.classtype };
    let oldstate = this.state.data;
    let newid = 0;
    createClass(newclass).then((res) => {
      newid = res.data.id;
      newclass.id = newid;
      oldstate.push(newclass);
      this.setState({name: '', description: '', classtype:'Warrior', data: oldstate});
    }); 
 }
update(field) {
  return e => this.setState({ [field]: e.currentTarget.value });
}
updateList() {
  getAllClasses().then(res => {
    console.log(res.data);
    this.setState({data: res.data});
  }).catch(error => console.log(error));
}

  componentDidMount(){
    // Get all the classes from the backend
    getAllClasses().then(res => {
      console.log(res.data);
      this.setState({data: res.data});
    }).catch(error => console.log(error));
  }
  render(){
    return(
      <Jumbotron>
            <h1>Current Classes in Lost Ark</h1>
            <Button color="primary" className="button-margin" onClick={this.toggle}>Add new Class</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <Form onSubmit={this.onFormSubmit}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  <FormGroup row>
                    <Label for="classname" sm={2}>Class Name:</Label>
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
                    <Label for="classtype" sm={2}>Type:</Label>
                    <Col sm={10}>
                      <Input type="select" name="classtype" id="classtype" value={this.state.classtype}
                      onChange={this.update('classtype')}>
                      <option defaultValue value="Warrior">Warrior</option>
                      <option value="Fighter">Fighter</option>
                      <option value="Hunter">Hunter</option>
                      <option value="Magician">Magician</option>
                      </Input>
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
                {this.state.data.map((cl) => {
                  return <ClassItem key={cl.id} name={cl.name} 
                    description={cl.description} classtype={cl.classtype} classId={cl.id}
                      updateList={this.updateList}></ClassItem>
                })}
            </Col>
        </Jumbotron>
      );
  }
}
export default Classes;