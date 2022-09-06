import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Navbar } from "./navbar"
import { Puppy } from "./puppypage"

export const AllRoutes=()=>{
    return(
       <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/puppy" element={<Puppy/>}/>
         <Route path="/search" element={<Home/>}/>
        </Routes>
        </>
    )
}