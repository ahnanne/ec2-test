import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/SupabaseClient';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener  } = supabase.auth.onAuthStateChange((e, session) => {
      if (session.user) {
        // TODO: user store에 dispatch
        navigate('/');
      }
    });

    return () => {
      authListener?.unsubscribe();
    }
  }, []);

  return null;;
};

export default Callback;