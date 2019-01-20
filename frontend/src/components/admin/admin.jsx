import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import './admin.css';

class Admin extends React.Component {
  render(){
      return(
        <Jumbotron>
            <h1>Hello Admin</h1>
            <p>
                Please Select Data to edit or show.
            </p>
            <p className='admin-links'>
            <Link to={'/admin/classes'}>Classes</Link>
            <Link to={'/admin/skills'}>Skills</Link>
            <Link to={'/admin/passives'}>Passives</Link>
            </p>
        </Jumbotron>
      );
  }
}
export default Admin;