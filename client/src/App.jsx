import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
