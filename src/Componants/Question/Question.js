import React, { useState } from 'react'
import QuizOption from '../QuizOption/QuizOption';

export default function Question({quizQuestion}) {
    const {question, options, correctAnswer} = quizQuestion;
    const [answer, setAnswer] = useState(null);
    const [design, setDesign] = useState(null);
    const [clickedOption, setClickedOption] = useState('');
    const [giveAnswer, setGiveAnswer] = useState(false);

    
    const total = []; 
   
    const getAnswer =(ans)=>{
        if(ans===correctAnswer){
            setGiveAnswer(true);
        }else{
            setGiveAnswer(false);
        }
        
        setClickedOption(ans);
        console.log(giveAnswer);
        // if(ans){
        //     setAnswer(ans);
        // }
        // if(answer == correctAnswer){
            
           
        // }else{
        //     setDesign('wrong');
        //     console.log('No');
        // }
       
    }
    
    const showAnswer =()=>{
        if(correctAnswer){
            alert(correctAnswer);
        }
    }
  return (
    <div className='p-3 border border-primary mt-2'>
        <div className='mb-2'>
        <h5 className='text-primary text-center'>{question}</h5>
        <div className='d-flex justify-content-md-start justify-content-center ps-2'>
        <button onClick={showAnswer} className='btn btn-outline-primary'>Answer</button>
        </div>
        </div>
        <div className='row row-cols-md-2 row-cols-1 g-2 gx-2'>
         {/* {
            options.map((option, index)=><QuizOption 
            key={index}
            option = {option}
            design={design}
            setDesign={setDesign}
            correctAnswer = {correctAnswer}
            ></QuizOption>)
         }   */}
         <div className='col '>
         <div  className= 'border border-opacity-25 border-primary py-3 ps-2' style={giveAnswer == true ? ( clickedOption === options [0] ? {backgroundColor: 'green'}:{backgroundColor: 'white'}) : (clickedOption === options[0]? {backgroundColor: 'red'}: (correctAnswer===options[0] && clickedOption?  {backgroundColor: 'green'}: {backgroundColor:'white'})) } >
        <div class="form-check">
        <input onClick={()=>getAnswer(options[0])} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {options[0]}
        </label>
    </div>
    </div>
    </div>
    <div className='col '>
    <div  className= 'border border-opacity-25 border-primary py-3 ps-2' style={giveAnswer == true ? ( clickedOption === options [1] ? {backgroundColor: 'green'}:{backgroundColor: 'white'}) : (clickedOption === options[1]? {backgroundColor: 'red'}: (correctAnswer===options[1] && clickedOption?  {backgroundColor: 'green'}: {backgroundColor:'white'})) } >
        <div class="form-check">
        <input onClick={()=>getAnswer(options[1])} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {options[1]}
        </label>
    </div>
    </div>
    </div>
    <div className='col '>
    <div  className= 'border border-opacity-25 border-primary py-3 ps-2' style={giveAnswer == true ? ( clickedOption === options [2] ? {backgroundColor: 'green'}:{backgroundColor: 'white'}) : (clickedOption === options[2]? {backgroundColor: 'red'}: (correctAnswer===options[2] && clickedOption?  {backgroundColor: 'green'}: {backgroundColor:'white'})) } >
        <div class="form-check">
        <input onClick={()=>getAnswer(options[2])} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {options[2]}
        </label>
    </div>
    </div>
    </div>
    <div className='col '>
    <div  className= 'border border-opacity-25 border-primary py-3 ps-2' style={giveAnswer == true ? ( clickedOption === options [3] ? {backgroundColor: 'green'}:{backgroundColor: 'white'}) : (clickedOption === options[3]? {backgroundColor: 'red'}: (correctAnswer===options[3] && clickedOption?  {backgroundColor: 'green'}: {backgroundColor:'white'})) } >
        <div class="form-check">
        <input onClick={()=>getAnswer(options[3]? options[3]: 'jjjj')} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
        <label class="form-check-label" for="flexRadioDefault4">
            {options[3] ? options[3]: "No Options"}
        </label>
    </div>
    </div>
    </div>
        </div>
  
  
</div>

  
  )
}
