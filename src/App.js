import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';

import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
