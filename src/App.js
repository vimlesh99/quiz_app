import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <AppRoutes /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
