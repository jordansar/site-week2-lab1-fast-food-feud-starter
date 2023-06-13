import { useState } from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick = () => {} }) {
  let ButtonClassName = isActive ? "chip active" : "chip"
  return (
    <button className= {ButtonClassName} onClick={onClick}>
      <p className="label"> {label} </p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
