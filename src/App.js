import { useEffect, useState } from "react";
import Allbox from "./component/Allbox";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "./component/Button";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  let lat,
    lon = "";

  const apikey = ``;

  const [weather, setweather] = useState(null);
  const [loading, setloading] = useState(false);
 

  useEffect(() => {
    CuurentLocation();
  }, []);

  let CuurentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log("현재위치", lat, lon);
      locationapi();
    });
  };
  const locationapi = async () => {
    let url = new URL(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
    );
    setloading(true);
    let response = await fetch(url);
    let data = await response.json();
    setweather(data);
    setloading(false);
  };

  const countrybutton = async (country) => {
    let curl = new URL(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apikey}&units=metric`
    );
    setloading(true);
    let cresponse = await fetch(curl);
    let cdata = await cresponse.json();

    setweather(cdata);
    setloading(false);
  
  };

  return (
    <main>
      
        {loading == true ? (
          <div className="container">
          <ClipLoader
            color="#ffffff"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          </div>
        ) : (
          <div className="container">
            <Allbox weather={weather} />
            <Button
              countrybutton={countrybutton}
              CuurentLocation={CuurentLocation}
             
            />
         </div>
        )}
     
    </main>
  );
}

export default App;
