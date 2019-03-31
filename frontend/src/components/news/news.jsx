import React from 'react';
import { Jumbotron } from 'reactstrap';
import NewsItems from './newsitems';

class News extends React.Component {
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
            <h1>Lost Ark News!</h1>
            <NewsItems />
          </Jumbotron>
          );
      }
}
export default News;