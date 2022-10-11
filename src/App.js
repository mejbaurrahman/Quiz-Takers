import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element: <Home></Home>
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
