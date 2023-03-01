import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/Home';
import Quote from './components/routes/Quote';
import Calculator from './components/routes/Calculator';
import Layout from './components/Layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quote" element={<Quote />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
