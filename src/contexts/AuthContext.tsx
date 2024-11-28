import { createContext } from "react";
import { IAuthContext } from "../types";

const AuthContext = createContext<IAuthContext | null>(null);

export default AuthContext;
