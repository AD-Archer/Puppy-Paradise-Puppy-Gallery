import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PuppyGallery from './components/PuppyGallery';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/Puppy-Paradise-Puppy-Gallery">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<PuppyGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
