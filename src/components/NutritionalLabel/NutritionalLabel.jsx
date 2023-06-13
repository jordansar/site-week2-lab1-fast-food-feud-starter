import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{`CHANGE_ME`}</h4>

      <ul className="fact-list">{
        nutritionFacts.map((facts) => {
          return (
            <NutritionalLabelFact key= {facts.id} label = {facts.label} attribute={fact.attribute} item={item}/>
          )
        }) 
      }</ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item?.[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
