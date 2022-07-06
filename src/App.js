import './App.css';
import Home from './pages/Home/Home.js';
import Resume from './pages/Resume/Resume.js';
import Page2 from './pages/Page2.js';
import Navbar from './Components/Navbar/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resume' element={<Resume/>} />
          <Route path='/page2' element={<Page2/>} />
        </Routes>
      </Router>
      
        
    </div>
  );
}

export default App;
