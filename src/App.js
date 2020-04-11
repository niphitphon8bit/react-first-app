import React, { useState } from 'react'
import './App.css'
export default function App() {

  const [data, setData] = useState([]);

  function addData() {
    console.log(data,...data);
    setData([...data, { value: Math.random() }]);
  }
  return (
    <div>
      {/* <p className="bg-red">ข้อมูลปัจุบัน : {data}</p> */}

      <button onClick={addData}>add</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}
