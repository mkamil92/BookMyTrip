import PopDestinations from "../../components/busesComp/PopularDest";
import BestServices from "../../components/busesComp/bestServiceCom";
import BookingsForm from "../../components/busesComp/bookingForm";
import BusHeader from "../../components/busesComp/busHeader";
import ServiceSlide from "../../components/busesComp/busServicesSlides/Slides";
import BussTrip from "../../components/busesComp/busesTrip/busTrips";
import TripProvidr from "../../context/busesTripContext/tripProvider";

export default function Buses() {
    return (
        <TripProvidr>
            <BusHeader />
            <BookingsForm />
            <BussTrip />
            <PopDestinations />
            <BestServices />
            <ServiceSlide />
        </TripProvidr>
    )
}