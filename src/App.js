import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AppHeader } from "./cmps/AppHeader/AppHeader";

export const App = () => {
  return (
    <Router>
      <div className="App main-layout">
        <AppHeader />
        <Routes>
          <Route element={<SignupPage />} path="/signup" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<HomePage />} path="/" />
        </Routes>
      </div>
    </Router>
  );
};
