import React, {Component} from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

class Profile extends Component {


  render () {
    return (
      <Form>
        <Row className="g-2">
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        </Col>
        <Col md>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          </Col>
        </Row>
          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEducation">
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" placeholder="Education" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience</Form.Label>
            <Form.Control type="text" placeholder="Experience" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSkill">
            <Form.Label>Skill</Form.Label>
            <Form.Control type="text" placeholder="Skill" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
}

export default Profile;