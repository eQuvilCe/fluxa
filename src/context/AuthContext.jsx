import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { api } from '../lib/api.js';

const AuthContext = createContext(null);

function loadUser() {
  try {
    const raw = localStorage.getItem('fluxa-user');
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => loadUser());
  const [booting, setBooting] = useState(true);
  const isLoggedIn = !!user;

  useEffect(() => {
    if (user) localStorage.setItem('fluxa-user', JSON.stringify(user));
    else localStorage.removeItem('fluxa-user');
  }, [user]);

  useEffect(() => {
    const token = localStorage.getItem('fluxa-token');
    if (!token) {
      setBooting(false);
      return;
    }
    api
      .me()
      .then((data) => setUser(data.user))
      .catch(() => {
        localStorage.removeItem('fluxa-token');
        setUser(null);
      })
      .finally(() => setBooting(false));
  }, []);

  const applySession = useCallback((data) => {
    if (data.token) localStorage.setItem('fluxa-token', data.token);
    setUser(data.user);
    return data.user;
  }, []);

  const login = useCallback(
    async (email, password) => {
      // backward compat: if only email passed (old demo), fake local
      if (password === undefined) {
        const local = String(email || '').split('@')[0].trim();
        const nick =
          local
            .replace(/[._+-]/g, ' ')
            .split(' ')
            .filter(Boolean)
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ') || 'Creator';
        const u = { email: email.trim(), nick, name: nick };
        setUser(u);
        return u;
      }
      const data = await api.login({ email, password });
      return applySession(data);
    },
    [applySession]
  );

  const register = useCallback(
    async (name, email, password) => {
      const data = await api.register({ name, email, password });
      return applySession(data);
    },
    [applySession]
  );

  const logout = useCallback(() => {
    localStorage.removeItem('fluxa-token');
    localStorage.removeItem('fluxa-user');
    setUser(null);
  }, []);

  const setIsLoggedIn = (v) => {
    if (!v) logout();
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, login, register, logout, setIsLoggedIn, booting }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
