/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"


const Header = ({ navClickHandler }) => {

  return (
    <div className="bg-emerald-500 font-semibold text-white ">

      <div className="max-w-screen-2xl mx-auto flex md:flex-row flex-col justify-between items-center p-5 gap-3">
        <a href="" className="text-2xl md:text-4xl">Free Meals API</a>


        <nav className="flex gap-5 md:gap-10 text-xl">
          <NavLink className="hover:underline active:scale-95 hover:-translate-y-1 transition" to={'/'}>Home</NavLink>
          <button className="hover:underline active:scale-95 hover:-translate-y-1 transition" onClick={navClickHandler}><NavLink to={'/about'}>About</NavLink></button>
          <button className="hover:underline active:scale-95 hover:-translate-y-1 transition" onClick={navClickHandler}><NavLink to={'/freeMeals'}>Meals</NavLink></button>
          <button className="hover:underline active:scale-95 hover:-translate-y-1 transition" onClick={navClickHandler}><NavLink to={'/contact'}>Contact</NavLink></button>
          <button className="hover:underline active:scale-95 hover:-translate-y-1 transition" onClick={navClickHandler}><NavLink to={'/signup'}>Sign In</NavLink></button>

        </nav>

      </div>
    </div>
  )
}

export default Header