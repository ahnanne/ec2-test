import { useState, useEffect  } from 'react';
import { supabase } from '../utils/SupabaseClient';
import styled from 'styled-components';

import useUser from '../hooks/useUser';

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
`;

const StyledUser = styled.div`
  width: 100px;
  color: #ffffff;
  font-weight: 700;
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-flow: row wrap;
  max-width: calc(100% - 100px);
`;

const StyledMenuItem = styled.li`
  color: #ffffff;
  margin-right: 20px;
`;

const Header = () => {
  // TODO: 사용자 정보 전역으로 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { getUser } = useUser();
  const user = getUser();

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, [supabase, user]);

  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();

    // TODO: toastify
    if (error) {
      alert(JSON.stringify(error));
    }
    else {
      setIsLoggedIn(false);
    }
  };

  return (
    <StyledHeader>
      <StyledUser>
        {isLoggedIn ? (
          <>안녕하세요, {getUser().user_name}님!</>
        ) : (
          <>여기는 뭐하는 곳일까요?</>
        )}
      </StyledUser>
      <StyledMenu>
        <StyledMenuItem>
          준비 중입니다 ㅎ
        </StyledMenuItem>
        {isLoggedIn && (
          <StyledMenuItem>
            <button type="button" onClick={handleSignout}>
              로그아웃
            </button>
          </StyledMenuItem>
        )}
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
