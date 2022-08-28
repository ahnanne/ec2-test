import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Callback from './pages/Callback';

import Header from './components/Header';

import './App.css';
import './reset.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/callback" element={<Callback />} />
      </Routes>
    </div>
  );
}

export default App;
