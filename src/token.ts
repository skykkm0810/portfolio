import { authTokenVar, isLoggedInVar } from "./apollo";
import moment from "moment";

export const LOCALSTORAGE_TOKEN = "pp-jwt";

export const getToken = () => localStorage.getItem(LOCALSTORAGE_TOKEN);

export const setToken = (token: string) => {
  localStorage.setItem(LOCALSTORAGE_TOKEN, token);
};

export const logIn = (token: string) => {
  setToken(token);
  authTokenVar(token);
  window.location.href = "/";
};

export const removeToken = () => {
  localStorage.removeItem(LOCALSTORAGE_TOKEN);
};

export const logOut = () => {
  removeToken();
  authTokenVar("");
  window.location.href = "/";
};
