import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ListEvent from './ListEvent';

const HomeScreen = () => {
  const tasks = [
    { id: '1', text: 'task 1', date: '12/20/2021' },
    { id: '2', text: 'task 1', date: '12/20/2021' },
  ];
  const [events, setEvents] = useState(tasks);
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    const newArr = events.slice();
    newArr.splice(0, 0, { id: Math.random(1000), text: text, date: date });
    setEvents(newArr);
    console.log(newArr, events);
  };

  const deleteHandler = (index) => {
    const newArr = events.slice();
    newArr.splice(index, 1);
    setEvents(newArr);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <h1>Diary</h1>
          {events.map((event, index) => {
            return (
              <ListEvent
                key={index}
                event={event}
                remove={() => deleteHandler({ index })}
              />
            );
          })}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="text">
              <Form.Control
                type="text"
                placeholder="Enter Your Event"
                onChange={(e) => setText(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="date">
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
