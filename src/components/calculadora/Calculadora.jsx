import React from 'react'
import Btn_calculator from './buttons_calculator/Btn_calculator'
import '../calculadora/calculadora.scss'
import Pantalla from './pantalla/Pantalla'
import Btn_clear from './btn clear/Btn_clear'
import {useState} from 'react'

function Calculadora () {
    
    const [input,setInput] = useState("");
    const agregarInput = val => {
        setInput(input + val);
    }

  return (
    <div className="container_calculator">
        <Pantalla input={input}/>
        <div className="fila"> 
            <Btn_calculator manejarClick={agregarInput}>1</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>2</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>3</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>+</Btn_calculator>
        </div>
        <div className="fila">
            <Btn_calculator manejarClick={agregarInput}>4</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>5</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>6</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>-</Btn_calculator>
        </div>
        <div className="fila">
            <Btn_calculator manejarClick={agregarInput}>7</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>8</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>9</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>*</Btn_calculator>
        </div>
        <div className="fila">
            <Btn_calculator manejarClick={agregarInput}>=</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>0</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>.</Btn_calculator>
            <Btn_calculator manejarClick={agregarInput}>/</Btn_calculator>
        </div>
        <div className="fila"> <Btn_clear/></div>
       


        
    </div>
  )
}

export default Calculadora