import React from 'react'
import './btn_calculator.scss'

function btn_calculator(props) {
    const esOperador = valor=> {
        return isNaN(valor) &&( valor  != '.') && (valor != '=' );
    };
  return (
    <div className={`btn-container ${esOperador(props.children) ? 'operador' : '' }`.trimEnd()}
    onClick={()=> props.manejarClick(props.children)}>
        {props.children}
    </div>
  )
}

export default btn_calculator