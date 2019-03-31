import React from 'react';
import { Jumbotron, Button, Modal, 
  ModalHeader, ModalBody, ModalFooter,
  Form, Col, Label, FormGroup, Input} from 'reactstrap';
import PassiveItem from './passiveitem';
import { getAllPassives, createPassive } from '../../../util/admin/apipassive';

class Passives extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filtered: [],
      name: '', description: '',
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
    getAllPassives().then(res => {
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
    let newpassive = { name: this.state.name, description: this.state.description};
    let oldstate = this.state.data;
    let newid = 0;
    createPassive(newpassive).then((res) => {
      newid = res.data.id;
      newpassive.id = newid;
      oldstate.push(newpassive);
      this.setState({ name: '', description: '', data: oldstate});
    }); 
 }
  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }
  updateList() {
    getAllPassives().then(res => {
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
        <h1>Current Passives in Lost Ark</h1>
         <Button color="primary" className="button-margin" onClick={this.toggle}>Add new Passive</Button>
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
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type="Submit" onClick={this.toggle}>Submit</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Form>
            </Modal>
            <Col className='rows-cards'>
              {this.state.filtered.map((cl) => {
                return <PassiveItem key={cl.id} name={cl.name} description={cl.description} 
                              updateList={this.updateList} classId={cl.id} ></PassiveItem>
              })}            
            </Col>
        </Jumbotron>
      );
  }
}
export default Passives;