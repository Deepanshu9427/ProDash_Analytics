
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const saved = localStorage.getItem('auth');
    return saved ? JSON.parse(saved) : { user: null, isAuthenticated: false };
  });

  const login = (email: string) => {
    const newState = { user: { email }, isAuthenticated: true };
    setAuthState(newState);
    localStorage.setItem('auth', JSON.stringify(newState));
  };

  const logout = () => {
    const newState = { user: null, isAuthenticated: false };
    setAuthState(newState);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
