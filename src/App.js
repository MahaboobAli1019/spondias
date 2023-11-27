import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './includes/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './includes/Footer';

function App() {
  return (
    <BrowserRouter basename='/spondias'>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
