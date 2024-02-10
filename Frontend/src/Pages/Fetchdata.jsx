import React from 'react'
import data from "./data.json";
const Fetchdata = () => {
  return (
    <div>
        <h1 className="text-center">List of Books</h1>
        <br />
        {
            data.map((data,i)=>(
             <div key={i}>
                            <h1>{data.title}</h1>
                            <h1>{data.author}</h1>
                            <img src={data.image} alt="bgd" />
             </div>
            ))
        }
    </div>
  )
}

export default Fetchdata