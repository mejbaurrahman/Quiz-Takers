import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { QuizItems } from './Loaders/QuizItems/QuizItems';
import QuizTopics from './Componants/QuizTopics/QuizTopics';
import Quiz from './Pages/Quiz/Quiz';
import Statistics from './Pages/Statistics/Statistics';
import Exam from './Pages/Exam/Exam';
import Blog from './Pages/Blog/Blog';




function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          
          element: <Home></Home>,
          children:[
            {
              path:'/',
              loader: QuizItems,
              element:<QuizTopics></QuizTopics>

            }
          ]
        },
        {
          path:'/quiz',
          loader: QuizItems,
          element:<Quiz></Quiz>
        },
        {
          path:'/stats',
          loader: QuizItems,
          element:<Statistics></Statistics>
        },
        {
          path:`/quiz/:id`,
          loader: async ({params})=>{
             return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
             
          } ,
         
          element:<Exam></Exam>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        }
        

      ]
    },
    {
      path:'*',
      element:<NotFound></NotFound>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
