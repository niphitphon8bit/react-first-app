import React, { useState } from 'react'
import './App.css'
export default function App() {

  const [data, setData] = useState([{ name: '' }]);

  // function addData() {
  //   console.log(data, ...data);
  //   setData([...data, { value: Math.random() }]);
  // }

  function fullnameChange(e) {
    setData([{ name: e.target.value }]);
  }

  return (
    <div>
      <p>name : {data[0].name}</p>
      <input type="text" value={data[0].name} onChange={fullnameChange} />
    </div>
  )
}
