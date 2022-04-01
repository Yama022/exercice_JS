// == Import
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nasa from 'src/components/Nasa';
import './styles.css';


// == Composant
function App() {

  const [data, setData] = useState({
    value: [],
  });

  useEffect(() => {
    const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=NLQxO3cm0Tm2KmoJ4xWBCAPWLD3AOv9XHPL1RQf3';
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    axios.defaults.headers.common = {
      "X-API-KEY": "NLQxO3cm0Tm2KmoJ4xWBCAPWLD3AOv9XHPL1RQf3",
    };

    async function getData() {
      const response = await axios.get(apiUrl, config);
      const data = response.data;
      setData(data);
    }
    getData();

  }, [setData]);


  return (
    <div className="app">
      <Nasa data={data} />
    </div>
  );

  
  }

// == Export
export default App;
