export const LOGIN = 'LOGIN';
 export const LOGOUT = 'LOGOUT';

export const login = (payload) => ({
  type: LOGIN,
  payload // number, string, objeto, array, any,
});

export const logout = () => ({
  type: LOGOUT,
});