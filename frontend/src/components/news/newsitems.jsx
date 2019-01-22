import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class NewsItems extends React.Component{
    render(){
        return(        
        <div>
        <Card body className="text-left">
            <CardTitle>{this.props.name}afdsa123</CardTitle>
            <CardText>{this.props.description}ccccc</CardText>
            <Button>Go somewhere</Button>
        </Card>
        <Card body className="text-center">
            <CardTitle>{this.props.name}dsafdsa</CardTitle>
            <CardText>{this.props.description}cccc</CardText>
            <Button>Go somewhere</Button>
        </Card>
        <Card body className="text-right">
            <CardTitle>{this.props.name}afdsagsa</CardTitle>
            <CardText>{this.props.description}cccc</CardText>
            <Button>Go somewhere</Button>
        </Card>
        </div>
        );
    }
};

export default NewsItems;