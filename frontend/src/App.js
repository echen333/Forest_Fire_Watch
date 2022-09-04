import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Demo from './components/Demo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
