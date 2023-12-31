
import './App.css';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Contact from "./components/Contact";
import AboutSection from './components/AboutSection';
import Projects from './components/Projects';

function App() {
  return (
    <Box>
      <Header/>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<AboutSection/>} />
          {/* <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} /> */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects" element={<Projects/>} />
          
        </Routes>
      </BrowserRouter>
     

    </Box>
  );
}

export default App;
