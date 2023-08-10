
import './App.css';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>} />
          {/* <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} /> */}
        </Routes>
      </BrowserRouter>
     

    </Box>
  );
}

export default App;
