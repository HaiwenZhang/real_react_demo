import { USER_LOGGED_IN } from '../types';
import api from '../api';

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user,
});

export const login = data => dispatch =>
  api.user.login(data).then(user => dispatch(userLoggedIn(user)));
