import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ListEvent from './ListEvent';

const HomeScreen = () => {
  const tasks = [
    { text: 'task 1', date: '12/20/2021' },
    { text: 'task 1', date: '12/20/2021' },
  ];
  const [events, setEvents] = useState(tasks);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const newArr = events.slice();
    newArr.splice(0, 0, { text: text, date: date });
    setEvents(newArr);
    console.log(newArr, events);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Diary</h1>
          {events.map((event) => {
            {
              console.log(event.date);
            }
            <ListEvent event={event} />;
          })}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="text">
              <Form.Label>Text</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Event"
                onChange={(e) => setText(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="date">
              <Form.Label>Date </Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
