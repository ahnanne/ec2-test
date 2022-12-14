import { supabase } from "../utils/SupabaseClient";

const useUser = () => {
  const getUser = () => {
    // TODO: user store 값으로 변경
    const user = supabase.auth.user();
  
    if (!user) {
      return null;
    }
  
    const { identities } = user;
    const { identity_data } = identities[0];
  
    return identity_data;
  };

  return {
    getUser,
  };
};

export default useUser;
