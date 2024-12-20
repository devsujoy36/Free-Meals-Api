import { Outlet, useNavigation } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import './Home.css'
import Loader from "../Loader/Loader"
import { useState } from "react"


const Home = () => {

  const [compo, setCompo] = useState(true);
  const navClickHandler = () => {
    setCompo(false)

  }

  const navigation = useNavigation()
  return (
    <div className="">
      <Header navClickHandler={navClickHandler} />

      <div className="min-h-[80vh]" id="outlet-container">
        {
          compo
          &&
          <div className="min-h-[76vh] flex justify-center gap-2 flex-col items-center">
            <h1 className="text-5xl font-bold">Wellcome To Our</h1>
            <h1 className="text-4xl text-emerald-900 font-bold">Free Meals Api</h1>
          </div>
        }



        {
          navigation.state === "loading" ? <Loader /> : <Outlet />
        }
      </div>
      <Footer />
    </div>
  )
}

export default Home