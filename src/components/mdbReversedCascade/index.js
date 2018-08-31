import React from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText, Container } from 'mdbreact';

class ReversedCascade extends React.Component {
  render() {
   // const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'};
    return (
  
        <Card reverse >
          <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
          <CardBody cascade>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
        
    )
  }
}

export default ReversedCascade;