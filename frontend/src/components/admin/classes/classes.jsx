import React from 'react';
import { Jumbotron } from 'reactstrap';
import ClassItem from './classitem';
import { getAllClasses } from '../../../util/admin/apiclass';

class Classes extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      error: ''
    }
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
        {this.state.data.map((cl) => {
          return <ClassItem key={cl.id} name={cl.name} description={cl.description}></ClassItem>
        })}
        </Jumbotron>
      );
  }
}
export default Classes;