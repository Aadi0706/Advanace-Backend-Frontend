
import React, {useState} from 'react'

require('es6-promise').polyfill();
require('isomorphic-fetch');
import './App.css';

function App() {

  const [data,setData] =useState([]);
  const [q,setQ]=useState("")

  useEffect(()=>{
    fetch(`https://uborics-backend.herokuapp.com/footwears`)
    .then(response=>response.json())   // https response--to -- json format.
    .then((json)=> setData(json));   // json data got from above pass to setData 
  },[]);

  return (
    <div className="App">
    <div>filter here</div>
    <div>database here</div>
    </div>
  );
}

export default App;
