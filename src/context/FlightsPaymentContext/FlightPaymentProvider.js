import { useState } from "react";
import flightPayment from "./FlightPayContext";

export default function FlightPaymentProvider({children}){
    const [flightpaymentData,setFlightpaymentData] = useState();
    return (
        <flightPayment.Provider value={{flightpaymentData,setFlightpaymentData}}>
            {children}
        </flightPayment.Provider>
    )
}