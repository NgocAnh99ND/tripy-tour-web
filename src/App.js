import "./App.css";
import { UserProvider } from "./components/UserContext/UserContext";
import AppContent from "./AppContent";

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

export default App;
