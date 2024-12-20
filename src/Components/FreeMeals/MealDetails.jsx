/* eslint-disable no-unused-vars */
import { useLoaderData, useNavigate } from "react-router-dom"

const MealDetails = () => {

  const meals = useLoaderData();
  const meal = meals.meals[0];

  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory, strArea } = meal;

  const { strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, } = meal;

  const { strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, } = meal;

  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1)
  }

  return (
    <div className="max-w-screen-2xl lg:m-auto items-center py-10 md:border-none ">

      <div className="mx-5 max-w-5xl lg:m-auto bg-white border rounded-md shadow-2xl p-5 grid gap-5">

        <div className="flex gap-3 flex-col md:flex-row">
          <figure className="md:w-5/12 overflow-hidden rounded-xl">
            <img className="rounded-xl hover:scale-105 transition-all shadow-xl" src={strMealThumb} alt="" />
          </figure>

          <div>
            <h1 className="text-2xl font-semibold">{strMeal}</h1>
            <div className="mt-2">
              <h1 className="font-semibold">Ingredients :</h1>
              <div className="ml-6 text-xs font-semibold">
                <li>{strIngredient1} : {strMeasure1}</li>
                <li>{strIngredient2} : {strMeasure2}</li>
                <li>{strIngredient3} : {strMeasure3}</li>
                <li>{strIngredient4} : {strMeasure4}</li>
                <li>{strIngredient5} : {strMeasure5}</li>
                <li>{strIngredient6} : {strMeasure6}</li>
                <li>{strIngredient7} : {strMeasure7}</li>
                <li>{strIngredient8} : {strMeasure8}</li>
                <li>{strIngredient9} : {strMeasure9}</li>
                <li>{strIngredient10} : {strMeasure10}</li>
                <li>{strIngredient11} : {strMeasure11}</li>
                <li>{strIngredient12} : {strMeasure12}</li>
                <li>{strIngredient13} : {strMeasure13}</li>
                <li>{strIngredient14} : {strMeasure14}</li>
              </div>
            </div>
          </div>
        </div>


        <div>
          <h1><span className="font-semibold text-xl">Cooking Process : </span>{strInstructions}</h1>
        </div>

        <div className="">
          <button onClick={goBackHandler} className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold px-4 py-2 rounded transition-all">Back</button>
        </div>

      </div>
    </div>
  )
}

export default MealDetails