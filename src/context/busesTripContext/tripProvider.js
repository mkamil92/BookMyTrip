import { useState } from "react";
import tripContext from "./TripsContext";

export default function TripProvidr({children}){
    const [tripData,setTripdata] = useState({fromValue:"",toValue:"",date:""});
    return (
        <tripContext.Provider value={{tripData,setTripdata}}>
            {children}
        </tripContext.Provider>
    )
}