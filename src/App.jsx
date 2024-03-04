import AppRoutes from "./core/routes";

import viteLogo from "/vite.svg";
import "./App.css";
import { Suspense, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <div className="flex flex-col items-center border-b-4">
        <a href="/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Welcome to React</h1>

        <ul className="flex gap-8">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes isLoggedIn={false} />
          <div>Main Div</div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
