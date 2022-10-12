import React, { useState } from 'react'

export default function ({option, design,getAnswer, setDesign, correctAnswer}) {


    
    const checkAnswer = (option)=>{
        if(correctAnswer==option){
            setDesign(1)
            
            
        }else{
            setDesign(2)
           
        }
    }

    // className=''
  return (
    <div className='col '>
    <div  className={design === 1 ? `border border-opacity-25 border-primary py-3 bg-success ps-2`: `border border-opacity-25 border-primary py-3 bg-danger ps-2` }>
    <div class="form-check">
        <input onClick={()=>checkAnswer(option)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {option}
        </label>
    </div>
    </div>
    </div>
  )
}
