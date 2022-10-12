import React, { useState } from 'react'
import QuizOption from '../QuizOption/QuizOption';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons'


let total =0, wrongTotal=0;
export default function Question({quizQuestion, setTotal, setWrongTotal,qN ,setCorrect}) {
    const {question, options, correctAnswer} = quizQuestion;
    const [clickedOption, setClickedOption] = useState('');
    const [giveAnswer, setGiveAnswer] = useState(false);
    const [count, setCount] = useState(0);
    
   
   
    const getAnswer =(ans)=>{
        if(ans===correctAnswer){
            setGiveAnswer(true);
            total++;
            setTotal(total);
            setCorrect(1)

           
        }else{
            setGiveAnswer(false);
            wrongTotal++;
            setWrongTotal(wrongTotal);
           setCorrect(2);
            
        }
        
        setClickedOption(ans);
        // console.log(giveAnswer);
       
    }
    
    const showAnswer =()=>{
        if(correctAnswer){
            alert(correctAnswer);
        }
    }
  return (
    <div className='p-3 border border-primary mt-2'>
        <div className='mb-2'>
        <h5 className='text-primary text-center'>Quiz {qN} :{question}</h5>
        <div className='d-flex justify-content-md-start justify-content-center ps-2'>
        <button onClick={showAnswer} className='btn btn-outline-primary'> <FontAwesomeIcon icon={faEye}/></button>
        </div>
        </div>
        <div className='row row-cols-md-2 row-cols-1 g-2 gx-2'>
         {
            options.map((option, index)=><QuizOption 
            key={index}
            option = {option}
            clickedOption={clickedOption}
            getAnswer={getAnswer}
            giveAnswer ={giveAnswer}
            correctAnswer = {correctAnswer}
         ></QuizOption>) 
       } 
      
       
        </div>
</div>
  )
}
