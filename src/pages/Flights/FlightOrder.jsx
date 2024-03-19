import FlightsOrders from "../../components/flightsComp/FlightsOrderComp/FlightsOrder";
import FlightPaymentProvider from "../../context/FlightsPaymentContext/FlightPaymentProvider";

export default function FlightOrders() {
    return(
        <FlightPaymentProvider>
            <FlightsOrders />
        </FlightPaymentProvider>
    )
}