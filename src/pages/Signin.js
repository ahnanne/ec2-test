import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/SupabaseClient';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100vh;
  padding: 40px 20px 0;
`;

const StyledButton = styled.button`
  cursor: pointer;
  width: 300px;
  height: 40px;
  background-color: #ffffff;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 700;
  transition: all 200ms;

  &:focus,
  &:active {
    transform: translateY(3px);
    background-color: #61dafb;
  }
`;

const Signin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (supabase.auth.user()) {
      navigate('/', { replace: true });
    }
  }, [ supabase ]);

  const handleSignin = async () => {
    const { error } = await supabase.auth.signIn(
      {
        provider: 'github',
      },
      {
        redirectTo: 'http://localhost:3000/callback',
      },
    );

    // TODO: toastify
    if (error) {
      alert(JSON.stringify(error));
    }
  };

  return (
    <StyledContainer>
      <StyledButton type="button" onClick={handleSignin}>
        Sign In with GitHub
      </StyledButton>
    </StyledContainer>
  );
};

export default Signin;
// https://creativedesignsguru.com/next-js-supabase-auth/
// https://supabase.com/docs/guides/auth/auth-github