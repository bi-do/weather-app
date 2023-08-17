import React from 'react'
import { Button } from 'react-bootstrap';
import { countrybutton } from '../App';



const button = ({countrybutton,CuurentLocation}) => {
   
    
  return (
    
    
        <div className="button-zone">
          <div>
          <Button variant="primary"onClick={CuurentLocation}>Cuurent Location</Button>
          </div>
          <div>
            <Button variant="light"onClick={()=>{countrybutton('Seoul')}}>Seoul</Button>
            <Button variant="light"onClick={()=>{countrybutton('New york')}}>New york</Button>
            <Button variant="light"onClick={()=>{countrybutton('paris')}}>paris</Button>
            <Button variant="light"onClick={()=>{countrybutton('Tokyo')}}>Tokyo</Button>
          </div>
        </div>
    
  )
}

export default button