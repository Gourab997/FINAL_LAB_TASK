import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Route path="/" component={LoginScreen} exact />
          <Route path="/home" component={HomeScreen} exact />
        </Container>
      </Router>
    </div>
  );
}

export default App;
