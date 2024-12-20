/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;

  const navigate = useNavigate();
  const showDetailsHandler = () => {
    navigate(`/mealsDetails/${idMeal}`)
  }

  return (
    <div className="border shadow-lg rounded-lg flex justify-between p-3 flex-col gap-2 bg-white hover:scale-105 transition-all ">

      <div className="flex flex-col gap-2">
        <img className="rounded-md" src={strMealThumb} alt="" />

        <div className="flex gap-1 flex-col relative">
          <h1 className=" font-semibold">{strMeal}</h1>
          <h1 className=""><span className="font-semibold">Meals Id: </span> {idMeal}</h1>
        </div>
      </div>

      <div className=" text-center">
        <button onClick={showDetailsHandler} className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold px-4 py-2 rounded transition-all">Show Details</button>
      </div>

    </div>
  )
}

export default Meal