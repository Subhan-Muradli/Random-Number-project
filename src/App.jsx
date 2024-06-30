import { useState } from 'react'
import styles from './random.module.css'
import './App.css'

function App() {
  const [minValue, setMinValue]=useState(0)
  const [maxValue, setMaxValue]=useState(10)
  const [random, setRandom]=useState(0)
 
  

const changeRandom=()=>{
  setRandom(Math.floor(Math.random()*(maxValue-minValue+1)+minValue))
}

  return (
    <>
    <div style={{background:'blue', width:600, height:400, borderRadius:10}}>
      <div style={{display:'flex', gap:100, position:'relative', top:200}}>
        <div style={{width:300, height:40, position:'absolute', margin:'-150px 120px', background:'red', borderRadius:10}}>
        <span style={{color:'white', fontWeight:'bold', fontSize:20, position:'absolute', top:4, right:95}}>Random:{random}</span>
        </div>
        <span style={{color:'white', position:'absolute', top:-25, left:60}}>Max</span>
        <input type='number' className={styles.number1} value={minValue} onChange={(e)=>setMinValue(+e.target.value)}/>
        <span style={{color:'white', position:'absolute', top:-25, right:60}}>Min</span>
        <input type='number' className={styles.number2} value={maxValue} onChange={(e)=>setMaxValue(+e.target.value)}/>
        <button style={{position:'absolute', top:'100px', left:170, background:'greenyellow'}} onClick={changeRandom}>Get Random Number</button>
      </div>
    </div>
    </>
  )
}

export default App
