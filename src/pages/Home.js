import logo from '../logo.svg';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/signin" className='signin-link'>
          로그인
        </Link>
      </header>
    </div>
  );
};

export default Home;
