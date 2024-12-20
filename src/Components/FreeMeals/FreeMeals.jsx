import { useLoaderData } from "react-router-dom"
import Meal from "./Meal";

const FreeMeals = () => {
  const freeMeals = useLoaderData()
  const meals = freeMeals.meals



  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto py-5 ">

        <h1 className="text-center text-3xl font-semibold ">Free Meals</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 my-5 lg:mx-0 mx-10">
          {
            meals.map((meal, idx) => <Meal meal={meal} key={idx} />)
          }
        </div>
      </div>
    </div>
  )
}

export default FreeMeals