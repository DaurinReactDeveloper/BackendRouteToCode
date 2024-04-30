import React, { useEffect, useState } from "react";
import axios from "axios";
import { urlComment } from "./endpoints";

function App() {
  const [dataUrl, setData] = useState({});

  async function getData() {
    try {
      const result = await axios.get(urlComment);
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Mi Conexión</h1>
      <p>Estos son los datos:</p>
      {dataUrl.success && (
        <div>
          <p>Section: {dataUrl.data.section}</p>
        </div>
      )}
    </div>
  );
}

export default App;
