import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Conditional Rendering Example</h1>
      
      {/* Conditional message */}
      {isLoggedIn ? (
        <h2>Welcome, you are logged in!</h2>
      ) : (
        <h2>Please log in to continue.</h2>
      )}

      {/* Button to toggle login state */}
      <button onClick={handleLoginLogout} style={{ marginTop: "20px" }}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
