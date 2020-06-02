import React from "react";
import emojipedia from "../emojipedia"
import Emoji from "./emoji"
import Meaning from "./meaning"


function Card(props){
  
  return <div> <dl className="dictionary"> 
  <div className="term">
    <Emoji emoji = {props.emoji} name = {props.name}/>
    <Meaning meaning = {props.meaning}/>
    </div>
    </dl>
</div>  



}

export default Card;