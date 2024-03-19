import { useState } from "react";
import flightContext from "./FlightContext";

export default function FlightProvidr({children}){
    const [flightData,setFlightdata] = useState({return:false ,fromValue:"",toValue:"",fromDate:"",toDate:""});
    return (
        <flightContext.Provider value={{flightData,setFlightdata}}>
            {children}
        </flightContext.Provider>
    )
}