import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/SupabaseClient';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener  } = supabase.auth.onAuthStateChange((e, session) => {
      if (session.user) {
        navigate('/');
      }
    });

    return () => {
      authListener?.unsubscribe();
    }
  }, []);

  return (
    <div>
      잠시만 기다려주세요..
    </div>
  );
};

export default Callback;