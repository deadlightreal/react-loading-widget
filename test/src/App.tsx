import { useState } from 'react'
import './App.css'
import {Dots, Spinner} from "../../package/index"

export default function App() {

  const [selectedWidget, setSelectedWidget] = useState<number>(0)
  const [color, setColor] = useState<string>("#64963280")
  const [speed, setSpeed] = useState<string>("5")

  return (
    <>
      <div className='widgets-properties'>
        <select className='select-widget' name="" onChange={e => setSelectedWidget(parseInt(e.target.value))} id="">
          <option value="0">Dots</option>
          <option value="1">Spinner</option>
        </select>
        <div className='Row'>
          <input className='Color' type="color" value={color} onChange={e => setColor(e.target.value)} />
          <input className='Speed' min={0.25} max={15} step={0.25} onChange={e => setSpeed(e.target.value)} defaultValue={speed} type="range" />
        </div>
      </div>
      <ReturnWidget color={color} speed={parseInt(speed)} number={selectedWidget} />
    </>
  )
}

const ReturnWidget = (props : any) => {
  console.log(props.speed);
  switch (props.number) {
    case 0:
      return <Dots color={props.color} speed={props.speed} size="30px"/>
    case 1:
      return <Spinner color={props.color} speed={props.speed} size="50px" />
  }
}