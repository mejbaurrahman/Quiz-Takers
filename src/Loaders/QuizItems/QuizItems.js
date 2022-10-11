export const QuizItems = async()=>{
        const quizItems =  await fetch('https://openapi.programming-hero.com/api/quiz');
        const quizItemLoad = await quizItems.json();
        
        return quizItemLoad;

}