import React, { useState , useEffect} from 'react'
// import Header from './Header'
import './App.css'
export default function App() {
  // const h = 'หัว';
  const [data, setData] = useState(0);
  
  useEffect(() => {
   console.log({data});
  })

  return (
    <div>
      <p className="bg-red">ข้อมูลปัจุบัน : {data}</p>

      <button onClick={()=> setData(data + 1)}>Click</button>

      {/* <Header className ="bg-red" title = {h}/> */}
    </div>
  )
}
