import React from "react";
import "./styles/app.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/RouteErrorPage";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";
import RoomsPage from "./pages/RoomsPage";
function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route element={<ProfilePage />} path={"/profile"} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route element={<LoginPage />} path={"/login"} />
              <Route element={<SignupPage />} path={"/signup"} />
              <Route element={<RoomsPage />} path={"/rooms"} />
              <Route element={<RoomsPage />} path={"/rooms:id"} />
            </Route>
            <Route element={<ErrorPage />} path='*' />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
