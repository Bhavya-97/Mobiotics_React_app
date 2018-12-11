import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class card extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.state.person);
  }

  render () {
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.state.person.name}</CardTitle>
            <CardSubtitle>{this.props.state.person.company}</CardSubtitle>
            <CardText>{this.props.state.person.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
// export card;
