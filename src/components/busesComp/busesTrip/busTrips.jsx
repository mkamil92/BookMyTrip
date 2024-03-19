import { useContext, } from "react"
import tripContext from "../../../context/busesTripContext/TripsContext"
import arrObj from "../../../data/buses/bookingTravels";
import BusCard from "./busesCards";
import { IoIosWarning } from "react-icons/io";

export default function BussTrip() {
    const { tripData } = useContext(tripContext);
    const fromFounds = arrObj.find(f => f.from.toLowerCase() === tripData.fromValue.toLowerCase());
    if (tripData.fromValue !== "" && tripData.toValue !== "" && tripData.date !== "") {
        if (fromFounds) {
            const toFounds = fromFounds.To.find(t => t.dest.toLowerCase() === tripData.toValue.toLowerCase());
            if (toFounds) {
                const finalFound = toFounds.dates.find((fnd) => fnd.toLowerCase() === tripData.date.toLowerCase());
                if (finalFound) {
                    return (
                        <div id="searchTrips" className=" flex justify-center w-full flex-wrap mb-[80px]">
                            {
                                toFounds.services.map((serve, i) => {
                                    let firstDigit = Math.floor(Math.random(2) * 6) + 1;
                                    let firstDigitNumber = firstDigit < 2 ? 2 : firstDigit.toString();
                                    let finalPrice = Math.floor(Math.random() * 99) + 2;
                                    let twoDigitNumber = finalPrice < 10 ? `0${finalPrice}` : finalPrice.toString();
                                    let totPrice = firstDigitNumber.toString() + twoDigitNumber + "0";
                                    let iD = fromFounds.from + toFounds.dest + i.toString();
                                    return <BusCard s={serve} idss={iD} totalPrice={totPrice} toFound={toFounds} fromFound={fromFounds} fullDate={tripData.date}/>
                                })
                            }
                        </div>
                    )
                } else {
                    return (
                        <div className=" flex flex-col items-center">
                            <IoIosWarning className=" text-[150px] text-warning text-center" />
                            <h1 className=" text-center text-[26px] font-bold">No Result Found</h1>
                            <p className=" text-center text-[15px] text-[#585858] font-semibold">Please modify your search</p>
                        </div>
                    )
                }
            } else {
                return (
                    <div className=" flex flex-col items-center">
                        <IoIosWarning className=" text-[150px] text-warning text-center" />
                        <h1 className=" text-center text-[26px] font-bold">No Result Found</h1>
                        <p className=" text-center text-[15px] text-[#585858] font-semibold">Please modify your search</p>
                    </div>
                )
            }
        } else {
            return (
                <div className=" flex flex-col items-center">
                    <IoIosWarning className=" text-[150px] text-warning text-center" />
                    <h1 className=" text-center text-[26px] font-bold">No Result Found</h1>
                    <p className=" text-center text-[15px] text-[#585858] font-semibold">Please modify your search</p>
                </div>
            )
        }
    }

}