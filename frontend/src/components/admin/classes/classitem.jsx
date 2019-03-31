import React from 'react';
import './classitem.css';
import { deleteClass, editClass } from '../../../util/admin/apiclass';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, CardHeader,
    Form, ModalHeader, FormGroup, Label, Col, Input,
    Modal, ModalBody, ModalFooter } from 'reactstrap';

class ClassItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          name: this.props.name, description: this.props.description, classtype: this.props.classtype,
          modaledit: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggledit = this.toggledit.bind(this);
        this.editClasses = this.editClasses.bind(this);
      }
      update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
      }
      editClasses(e) {
        e.preventDefault();
        let classes = { id: this.props.classId, name: this.state.name, 
                description: this.state.description, classtype: this.state.classtype};
        editClass(classes).then( () => {
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
    removeClass(id) {
        deleteClass(id).then( () => {
            this.props.updateList();
        });
    }
  render(){
      return(
        <div className="card-total">
            <Card>
            <CardHeader>{this.props.classtype}</CardHeader>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
                <CardTitle>{this.props.name}</CardTitle>
                <CardText>{this.props.description}</CardText>
                <Button color="danger" onClick={this.toggle} >Delete</Button>
                <Button color="info" onClick={this.toggledit} >Update</Button>
            </CardBody>
            </Card>
            {/*         Modal for Edit             */}
            <Modal isOpen={this.state.modaledit} toggle={this.toggledit} className={this.props.className}>
              <Form onSubmit={this.editClasses}>
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
                    <Label for="classname" sm={2}>Class Type:</Label>
                    <Col sm={10}>
                      <Input type="text" value={this.state.classtype} name="classname" 
                        onChange={this.update('classtype')} id="classname" placeholder="Enter Class Type..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="description" sm={3}>Description:</Label>
                    <Col sm={9}>
                      <Input type="textarea" value={this.state.description} name="description" 
                      onChange={this.update('description')} id="description" placeholder="Enter Description..."/>
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
                <Button color="danger" onClick={() => this.removeClasses(this.props.classId)} >Delete</Button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
      );
  }
}
export default ClassItem;