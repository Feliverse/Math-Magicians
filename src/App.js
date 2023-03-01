import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Quote from './components/routes/Quote';
import Calculator from './components/routes/Calculator';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
