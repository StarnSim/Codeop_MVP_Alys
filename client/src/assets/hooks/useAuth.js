import { useContext } from "react";

import AuthContext from '../context/AuthContext';

export default function useAuth() {
  // calling useContext will return the "value" of the provider
  return useContext(AuthContext);
}
