export const QuizItems = async()=>{
        const quizItems =  await fetch('https://openapi.programming-hero.com/api/quiz');
        const quizItem = await quizItems.json();
        
        return quizItem;

}