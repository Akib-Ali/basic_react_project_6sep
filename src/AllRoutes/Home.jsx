import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"

   export  const Home=()=>{
    const [puppies, setPuppies] = useState([])
    const navigate = useNavigate();

   

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        const allPuppies = Object.keys(data.message)
        setPuppies(allPuppies)
    })
}, [])

    return (
        <div className='cardcontainer'>
            {/* <h1>Home Page</h1> */}
               
                {puppies.map(Puppy => ( <div className="card" key={Puppy} onClick={() => navigate(`/Puppies/${Puppy}`)}>{Puppy}</div>
                 
                ))}
            
        </div>
    )
}




    





export default Home