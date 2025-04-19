import "./App.css";
import "./styles/common.css";
import DataProvider from "./features/Context.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

const App = () => (
  <DataProvider>
    <AppRoutes />
  </DataProvider>
);

export default App;
