import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './card';

export default class grid extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          name: "David Davidson",
          company: "some company, Inc",
          description: "Some description"
        },
        {
          name: "David Davidson",
          company: "some company, Inc",
          description: "Some description"
        },
        {
          name: "David Davidson",
          company: "some company, Inc",
          description: "Some description"
        },
        {
          name: "David Davidson",
          company: "some company, Inc",
          description: "Some description"
        },
        {
          name: "David Davidson",
          company: "some company, Inc",
          description: "Some description"
        }
      ]
    }
  }
  render() {
    console.log("Heyya" + this.state.people);
    let peopleCards = this.state.people.map(person => {
      return  (
        <Col sm="4">
          <Card person={person} />
        </Col>
      )
    })
    return (
      <Container fluid>
        <Row>
          {peopleCards}
        </Row>

      </Container>
    );
  }
}
