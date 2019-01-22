import React from 'react';
import { Jumbotron } from 'reactstrap';
import PassiveItem from './passiveitem';
import { getAllPassives } from '../../../util/admin/apipassive';

class Passives extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      error: ''
    }
  }
  componentDidMount(){
    // Get all the classes from the backend
    getAllPassives().then(res => {
      console.log(res.data);
      this.setState({data: res.data});
    }).catch(error => console.log(error));
  }
  render(){
    return(
      <Jumbotron>
            <h1>Current Classes in Lost Ark</h1>
        {this.state.data.map((cl) => {
          return <PassiveItem key={cl.id} name={cl.name} description={cl.description}></PassiveItem>
        })}
        </Jumbotron>
      );
  }
}
export default Passives;