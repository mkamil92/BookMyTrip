import PopDestinations from "../../components/busesComp/PopularDest";
import BestFlights from "../../components/flightsComp/BestServiceFlights";
import FlightHeader from "../../components/flightsComp/Flights-Header";
import FlightsBookingForm from "../../components/flightsComp/FlightsSearch";
import FlightSlides from "../../components/flightsComp/FlightsSlidess/FlightSlider";
import FlightTrips from "../../components/flightsComp/flightTrips/FlightsTrip";
import FlightProvidr from "../../context/FlightTripContext/FlightProvider";

export default function Flights() {
    return(
        <FlightProvidr>
         <FlightHeader extraClasses=" mb-[170px]"/>
         <FlightsBookingForm />
         <FlightTrips />
         <PopDestinations />
         <BestFlights />
         <FlightSlides />
         </FlightProvidr>
    )
}