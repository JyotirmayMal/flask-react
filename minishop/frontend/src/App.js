import React, { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://bookish-space-guide-pqw6xjpwqv929965-5000.app.github.dev/", { name }, { headers: { "Content-Type": "application/json" }});
      setGreeting(response.data.message);
    } catch (error) {
      setGreeting("Error: " + (error.response?.data.error || "Something went wrong"));
    }
  };

  return (
    <div>
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <button type="submit">Greet</button>
      </form>
      {greeting && <h3>{greeting}</h3>}
    </div>
  );
}

export default App;
