import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/About' component={About}/>
      </div>
    </Router>
  );
}

export default App;
