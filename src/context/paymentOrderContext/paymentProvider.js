import { useState } from "react";
import paymentContext from "./PaymentContext";

export default function PaymentProvider({children}){
    const [paymentData,setpaymentData] = useState();
    return (
        <paymentContext.Provider value={{paymentData,setpaymentData}}>
            {children}
        </paymentContext.Provider>
    )
}