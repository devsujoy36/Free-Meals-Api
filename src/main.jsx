import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import FreeMeals from './Components/FreeMeals/FreeMeals.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import MealDetails from './Components/FreeMeals/MealDetails.jsx'
import SignUp from './Components/SignUp/SignUp.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    children:[
      {
        path:'/about',
        element: <About/>,
      },
      {
        path:'/freeMeals',
        element: <FreeMeals/>,
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'),
      },
      {
        path:'/mealsDetails/:mealId',
        element: <MealDetails/>,
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`),
      },
      {
        path:'/contact',
        element: <Contact/>,
      }, 
      {
        path:'/signup',
        element: <SignUp/>,
      }, 
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
