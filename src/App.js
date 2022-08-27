import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
