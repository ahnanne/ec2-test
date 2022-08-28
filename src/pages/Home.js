import { supabase } from '../utils/SupabaseClient';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

const Home = () => {
  const preventRoute = () => {
    if (supabase.auth.user()) {
      // TODO: toastify
      alert('이미 로그인하셨어용');
    }
  };

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/signin" className='signin-link' onClick={preventRoute}>
          로그인
        </Link>
      </header>
    </div>
  );
};

export default Home;
