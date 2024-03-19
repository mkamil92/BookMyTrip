import { useContext, } from "react"
import { IoIosWarning } from "react-icons/io";
import flightsObj from "../../../data/flightsData/FlightsData"
import flightContext from "../../../context/FlightTripContext/FlightContext";
import FlightCards from "./FlightCards";

export default function FlightTrips() {
    const { flightData } = useContext(flightContext);
    const fromFounds = flightsObj.find(f => f.from.toLowerCase() === flightData.fromValue.toLowerCase());
    if (flightData.fromValue !== "" && flightData.toValue !== "" && flightData.fromDate !== "") {
        if (fromFounds) {
            const toFounds = fromFounds.to.find(t => t.dest.toLowerCase() === flightData.toValue.toLowerCase());
            if (toFounds) {
                const finalFound = toFounds.dates.find((fnd) => fnd.toLowerCase() === flightData.fromDate.toLowerCase());
                if (finalFound) {
                    console.log(finalFound)
                    const lastFound = toFounds.services.filter((fnd) => fnd.return === flightData.return);
                    if (lastFound){
                        if (lastFound.length===0){
                            return (
                                <div className=" flex flex-col items-center">
                                    <IoIosWarning className=" text-[150px] text-warning text-center" />
                                    <h1 className=" text-center text-[26px] font-bold">No Result Found</h1>
                                    <p className=" text-center text-[15px] text-[#585858] font-semibold">Please modify your search</p>
                                </div>
                            )
                        }else{
                            return (
                                <div id="searchTrips" className=" flex justify-center w-full flex-wrap mb-[80px]">
                                    {
                                        lastFound.map((serve, i) => {
                                            let iD = fromFounds.from + toFounds.dest + i.toString();
                                            return <FlightCards s={serve} idss={iD} toFound={toFounds} fromFound={fromFounds} fullDate={flightData.fromDate} />
                                        })
                                    }
                                </div>
                            )
                        }
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