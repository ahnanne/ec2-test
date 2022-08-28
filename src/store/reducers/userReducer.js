import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

/** user:
 * {
 *  created_at: "2022-08-28T05:22:50.016666Z"
 *  id: "54733637"
 *  identity_data: (하단 identity_data 참고)
 *  last_sign_in_at: "2022-08-28T05:22:50.01662Z"
 *  provider: "github"
 *  updated_at: "2022-08-28T06:10:30.996713Z"
 *  user_id: string
 * }
 */

/** identity_data:
 * {
 *  avatar_url: "https://avatars.githubusercontent.com/u/54733637?v=4"
 *  email: "yein.ahn@fastfive.co.kr"
 *  email_verified: true
 *  full_name: "Yein Ahn"
 *  iss: "https://api.github.com"
 *  name: "Yein Ahn"
 *  preferred_username: "ahnanne"
 *  provider_id: "54733637"
 *  sub: "54733637"
 *  user_name: "ahnanne"
 * }
 */

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    initUser(state) {
      state.user = null;
    }
  }
});

export const { setUser, initUser } = userSlice.actions;
export default userSlice.reducer;