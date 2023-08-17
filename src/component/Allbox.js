import React from 'react'

const Allbox = ({weather}) => {
    console.log(weather)
  
  
    return (
        <div className="all-box">
          <div className="weather-rending">
            <p>{weather?.name}</p>
            <h1>{weather?.main.temp}℃</h1>
            <div>{weather?.weather[0].description}</div>
            <div>
              <img src=""></img>
            </div>
          </div>
        </div>
    
  )
}

export default Allbox