import { useState } from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = true, handleClick = () => {} }) {
  let ButtonClassName = isActive ? "chip active" : "chip"
  return (
    <button className= {ButtonClassName} onClick={handleClick}>
      <p className="label"> {label} </p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
