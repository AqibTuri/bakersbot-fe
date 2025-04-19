import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
