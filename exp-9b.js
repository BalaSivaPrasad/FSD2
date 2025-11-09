import React from "react";

function App() {
  
  const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student List</h1>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
