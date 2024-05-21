import './App.css';
import Navbar from './components/layouts/Navbar';
import Search from './components/users/Search';
import About from './components/pages/About';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import User from './components/users/User';
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
