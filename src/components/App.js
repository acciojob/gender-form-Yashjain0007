
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {

  let [male,setMale] = useState("");
  let [female,setFemale] = useState("");
  let [clothes,setClothes] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
       <div>
       <h2>Select your gender:</h2>
        <input type="radio" className="male" onChange={()=> {
          setMale(true)
          setClothes("shirt");        
        }
        } >Male</input>
        <input type="radio" className="female" onChange={()=> {
          
          setFemale(true)
          setClothes("dress")
          }}>Female</input>
       </div>

       <div>
        <h2>Select your {clothes} size</h2>
        {
          female=== true && 
          <select>
            <option value="select">Select size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
          </select>
        }
        {
          male === true &&
          <select>
            <option value="select">Select size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        }
       </div>


    </div>
  )
}

export default App
