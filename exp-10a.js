import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Form with useState</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <div>
        <h3>Live Preview:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
      </div>
    </div>
  );
}

export default App;
