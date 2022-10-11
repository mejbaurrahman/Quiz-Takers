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
