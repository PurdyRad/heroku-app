import './App.css';
import {useState, useEffect} from 'react';

function url(path){
  return process.env.NODE_ENV === 'development' 
  ? `http://localhost:5296${path}` : path
};

function App() {
  const [data, setData] = useState("Yo");

  useEffect(() => {
    fetch(url('/api/'))
    .then(res=> res.json())
    .then(apiData => setData(apiData.data))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {data} Where's da Princess
      </header>
    </div>
  );
}

export default App;
