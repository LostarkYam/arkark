import React from 'react';
import { Jumbotron } from 'reactstrap';
import UpdatesItems from './updatesitems';

class Updates extends React.Component {
    constructor(){
        super();
        this.state = {
          data: [],
          error: ''
        }
      }
    render(){
        return(
          <Jumbotron>
            <h1>Lost Ark updates!</h1>
            <UpdatesItems title="Patch 0.0.1" description="We are launching this website!"/>
            <UpdatesItems />
            <UpdatesItems />
            <UpdatesItems />
          </Jumbotron>
          );
      }
}


export default Updates;