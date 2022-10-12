import React from 'react'
import { Alert } from 'react-bootstrap'

export default function QuizOption({option, getAnswer, clickedOption, giveAnswer, correctAnswer}) {
  return (
<div className='col '>
    <div  className= 'border border-opacity-25 border-primary py-3 ps-2 rounded' style={giveAnswer === true ? ( clickedOption === option ? {backgroundColor: 'green'}:{backgroundColor: 'white'}) : (clickedOption === option? {backgroundColor: 'red'}: (correctAnswer===option && clickedOption?  {backgroundColor: 'green'}: {backgroundColor:'white'})) } >
   <div class="form-check d-flex">
   <input style={clickedOption? {display: 'none'}: {display:'block'}}  type="radio"  onClick={!clickedOption? ()=>getAnswer(option): ()=>{}} id={option} name="fav_language" value={option}/>
        <label class="form-check-label" for={ option}>{option}</label>
</div>
</div>
</div>
  )
}
