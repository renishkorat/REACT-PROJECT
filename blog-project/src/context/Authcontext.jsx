import { createContext, useContext, useState } from "react";
import { getUsers, registerUser } from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("blogUser");
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email, password) => {
    const users = await getUsers();

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      throw new Error("Invalid email or password");
    }

    const currentUser = {
      id: found.id,
      name: found.name,
      email: found.email,
    };

    localStorage.setItem("blogUser", JSON.stringify(currentUser));
    setUser(currentUser);

    return currentUser;
  };

  const register = async (name, email, password) => {
    const users = await getUsers();

    const exists = users.some((u) => u.email === email);

    if (exists) {
      throw new Error("Email already registered");
    }

    const newUser = await registerUser({
      name,
      email,
      password,
    });

    const currentUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    localStorage.setItem("blogUser", JSON.stringify(currentUser));
    setUser(currentUser);

    return currentUser;
  };

  const logout = () => {
    localStorage.removeItem("blogUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);