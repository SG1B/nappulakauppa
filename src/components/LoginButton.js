import React, { useState } from "react";
import LoginModal from "./LoginModal";

function LoginButton() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <button className='btn btn-outline-dark' onClick={() => setShowLogin(true)}>Kirjaudu</button>
      {showLogin && (
        <div className="login-overlay">
          <div className="login-window">
            <div className="login-header">
              <h2>Kirjaudu sisään</h2>
              <button className="close-btn" onClick={() => setShowLogin(false)}>
                X
              </button>
            </div>
            <div className="login-body">
              <LoginModal onClose={() => setShowLogin(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginButton;