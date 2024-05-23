import './App.css';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './components/layouts/Home';
function App() {
  return (
    <div className='App' >
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  )
}

export default App;
