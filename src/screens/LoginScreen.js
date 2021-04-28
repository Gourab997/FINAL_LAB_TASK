import React, { useState } from 'react';
import users from '../users.json';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const LoginScreen = ({ history }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    users.map((user, index) => {
      if (username == user.username && password == user.password) {
        console.log('hello');
        history.push('/home');
      } else {
        setMessage('Wrong UserName or Password');
      }
    });
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          {message && message}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="text">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter User Name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
