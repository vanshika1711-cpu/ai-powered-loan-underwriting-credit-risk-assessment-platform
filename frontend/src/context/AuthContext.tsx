import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [token, setTokenState] = useState<string | null>(null);

  const [theme, setTheme] = useState<"dark" | "light">("dark");

  /* LOAD SAVED STATE */

  useEffect(() => {

    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setTokenState(savedToken);
    }

    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }

  }, []);

  /* APPLY THEME */

  useEffect(() => {

    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

  }, [theme]);

  /* TOKEN HANDLING */

  const setToken = (newToken: string | null) => {

    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }

    setTokenState(newToken);
  };

  /* THEME TOGGLE */

  const toggleTheme = () => {

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  };

  return (
    <AuthContext.Provider value={{ token, setToken, theme, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

/* SAFE CONTEXT HOOK */

export const useAuth = () => {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};