import React, { useState } from 'react'
// import Header from './Header'
import './App.css'
export default function App() {
  // const h = 'หัว';
  const iniData = 0;
  const [data, setData] = useState(iniData);
  
  // use Effect to observe state

  // useEffect(() => {
  //  console.log({data});
  // })

  return (
    <div>
      <p className="bg-red">ข้อมูลปัจุบัน : {data}</p>

      <button onClick={()=> setData(data + 1)}>add</button>
      <button onClick={()=> setData(data - 1)}>delete</button>
      <button onClick={()=> setData(iniData)}>clear</button>

      {/* <Header className ="bg-red" title = {h}/> */}
    </div>
  )
}
