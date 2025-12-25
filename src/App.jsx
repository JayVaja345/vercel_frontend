import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://vercel-frontend-dun-mu.vercel.app/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Error fetching message", err);
      });
  }, []);

  return (
    <>
      <h1>Welcome to chaicode frontend</h1>
      <h2>data {message}</h2>3
    </>
  );
}

export default App;
