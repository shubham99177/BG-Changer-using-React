import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  const [Radius, setradius] = useState("2px")


  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{ backgroundColor: color , borderRadius : Radius}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded3x1 " >
            <button onClick={() => { setcolor("red") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "red" }}>red</button>
            <button onClick={() => { setcolor("green") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "green" }}>green</button>
            <button onClick={() => { setcolor("blue") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "blue" }}>blue</button>
            <button onClick={() => { setcolor("purple") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "purple" }}>purple</button>
            <button onClick={() => { setcolor("orange") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "orange" }}>orange</button>
            <button onClick={() => { setcolor("yellow") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "yellow" }}>yellow</button>
            <button onClick={() => { setcolor("pink") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "pink" }}>pink</button>
            <button onClick={() => { setcolor("black") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "black" }}>black</button>
            <button onClick={() => { setcolor("grey") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "grey" }}>grey</button>
            <button onClick={() => { setcolor("brown") }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{ backgroundColor: "brown" }}>brown</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
