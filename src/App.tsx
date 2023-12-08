import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import LoginPage from "./LoginPage";
const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
