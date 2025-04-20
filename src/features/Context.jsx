import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const savedUser = JSON.parse(
    localStorage.getItem("bakersBotUserData") || null,
  );
  const [user, setUser] = useState(savedUser);

  useEffect(() => {
    localStorage.setItem("bakersBotUserData", JSON.stringify(user));
  }, [user]);

  return (
    <DataContext.Provider value={{ user, setUser }}>
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

export default DataProvider;
