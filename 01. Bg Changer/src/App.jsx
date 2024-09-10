import { useState } from "react"
import ColorButton from "./ColorButton.jsx"

function App() {
  const [color, setColor] = useState("ash")

  let changeColor = (event)=> {
    setColor(event.target.textContent)
  }

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <ColorButton name="Crimson" changeColor={changeColor} textColor="white" />
      <ColorButton name="Green" changeColor={changeColor} textColor="white" />
      <ColorButton name="Midnightblue" changeColor={changeColor} textColor="white" />
      <ColorButton name="Olive" changeColor={changeColor} textColor="white" />
      <ColorButton name="Gray" changeColor={changeColor} textColor="white" />
      <ColorButton name="Yellow" changeColor={changeColor} textColor="Black" />
      <ColorButton name="Pink" changeColor={changeColor} textColor="Black" />
      <ColorButton name="Purple" changeColor={changeColor} textColor="white" />
      <ColorButton name="Lavender" changeColor={changeColor} textColor="Black" />
      <ColorButton name="MintCream" changeColor={changeColor} textColor="Black" />
      <ColorButton name="Black" changeColor={changeColor} textColor="white" />
        </div>
      </div>
    </div>
  )
}

export default App
