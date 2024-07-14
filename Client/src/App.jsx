import { Outlet } from "react-router-dom";
import { Header } from "./pages/index.js";

function App() {

  return (
    <div className="font-poppins">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
