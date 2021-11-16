import "../components/weather.css";

import { IonGrid, IonRow, IonCol } from "@ionic/react";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/da";

const Weather = ({getData}) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(getData);

  useEffect(() => {
    axios(
      "https://api.openweathermap.org/data/2.5/onecall?lat=56.162939&lon=10.203921&exclude={current,minutely,hourly,alert}s&units=metric&appid=5cc6e0bf1f3f191db1b19ce522d3d79b"
    )
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <IonGrid>
      
      <IonRow>
        {data.daily.map((data, tempItem) => (
          <IonCol key={tempItem} >{Math.ceil(data.temp.day)} </IonCol>
        ))}
      </IonRow>

      <IonRow>
        {data.daily.map((data, dateItem) => (
        
            <IonCol key ={dateItem} >
              <Moment unix format="dddd">
                {data.dt}
              </Moment>
            </IonCol>
        
        ))}
      </IonRow>

    </IonGrid>
  );
};

export default Weather;
