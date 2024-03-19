
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import CloseIcon from '@mui/icons-material/Close';
import Buttonss from '../busesComp/button';
import DropDown from '../busesComp/searchMenu';
import flightContext from '../../context/FlightTripContext/FlightContext';

export default function FlightsBookingForm() {
    const startRef = useRef();
    const endRef = useRef();
    const dateRef = useRef();
    const [openMenuOne, setOpenMenuOne] = useState(false);
    const [openMenuTwo, setOpenMenuTwo] = useState(false);
    const [startValue, setstartValue] = useState("");
    const [endValue, setendValue] = useState("");
    const [tripState, setTripState] = useState(false);
    const { setFlightdata } = useContext(flightContext);

    const startingHandler = (e) => {
        setstartValue(e.target.value)
        if (!openMenuOne) {
            setOpenMenuOne(true)
        }
    }

    const endingHandler = (e) => {
        setendValue(e.target.value)
        if (!openMenuTwo) {
            setOpenMenuTwo(true)
        }
    }

    const searchHandler = (e) => {
        setFlightdata({
            fromValue: startRef.current.value,
            toValue: endRef.current.value,
            fromDate: dateRef.current.value,
            return: tripState,
        })

    }
    return (
        <section className="">
            <div className=" absolute w-[80%] left-[10%] top-[630px]">
                <div className=" flex w-[175px] pl-[35px] pt-[10px] pb-[4px] bg-[#2e2d2b]">
                    <h2 className=" font-semibold text-[15px] text-white">Flights</h2>
                    <h2 className="text-[#f5b342] font-semibold ml-1 text-[15px]">Travels</h2>
                </div>
                <div className=" bg-white shadow-lg pt-[20px] pb-[20px] max-[1017px]:pl-[20px] max-[1017px]:pr-[20px]">
                    <div>
                        <button onClick={() => setTripState(false)} className={`border-1 text-[#f5b342] border-[#2e2d2b] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-3xl ml-[20px] max-[1017px]:ml-0 mt-[10px] mb-[20px] ${tripState === false ? " bg-[#2e2d2b]" : " bg-white"} `}>One Way</button>
                        <button onClick={() => setTripState(true)} className={`border-1 text-[#f5b342] border-[#2e2d2b] pl-[10px] pr-[10px] pt-[5px] pb-[5px] rounded-3xl ml-[20px] max-[288px]:ml-2 mt-[10px] mb-[20px] ${tripState ? " bg-[#2e2d2b]" : " bg-white"} `}>Return</button>
                    </div>
                    <div className="flex justify-center w-full max-[1017px]:flex-col">
                        <div className=' w-full flex max-[529px]:flex-col'>
                            <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[1017px]:ml-[0]  max-[1017px]:mt-[10px] max-[1017px]:mb-[10px]">
                                <FaLocationDot className=" text-[#2e2d2b] text-[20px] absolute left-[7px] top-[10px] " />
                                {
                                    openMenuOne ? (
                                        <CloseIcon onClick={() => setOpenMenuOne(false)} className=" text-[#2e2d2b] cursor-pointer text-[20px] absolute right-[7px] top-[10px] hidden" />
                                    ) : (
                                        ""
                                    )
                                }
                                <input onClick={() => {
                                    setOpenMenuOne(!openMenuOne)
                                    setOpenMenuTwo(false)
                                }} id="inpOne" required onChange={startingHandler} ref={startRef} type="text" placeholder="Start Location" className=" w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]" /><br />
                                <DropDown val={startValue} setOps={setOpenMenuOne} opens={openMenuOne} ids="1" />
                            </div>
                            <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[1017px]:ml-[0] max-[1017px]:mr-[0] max-[1017px]:mt-[10px] max-[1017px]:mb-[10px]">
                                <FaLocationDot className=" text-[#2e2d2b] text-[20px] absolute left-[7px] top-[10px]" />
                                {
                                    openMenuTwo ? (
                                        <CloseIcon onClick={() => setOpenMenuTwo(false)} className=" text-[#2e2d2b] cursor-pointer text-[20px] absolute right-[7px] top-[10px] hidden" />
                                    ) : (
                                        ""
                                    )
                                }
                                <input onClick={() => {
                                    setOpenMenuTwo(!openMenuTwo)
                                    setOpenMenuOne(false)
                                }} id="inpTwo" required onChange={endingHandler} ref={endRef} type="text" placeholder="End Location" className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]" /><br />
                                <DropDown val={endValue} setOps={setOpenMenuTwo} opens={openMenuTwo} ids="2" />
                            </div>
                        </div>
                        <div className=' w-full flex max-[529px]:flex-col'>
                            <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[1017px]:ml-[0] max-[1017px]:mt-[10px] max-[1017px]:mb-[10px]">
                                <input type="date" ref={dateRef} required className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[10px] pr-[10px] appearance-none" /><br />
                            </div>
                            <div className={` border-2 ml-[20px] mr-[20px] w-full relative max-[1017px]:ml-[0] max-[1017px]:mr-[0] max-[1017px]:mt-[10px] max-[1017px]:mb-[10px] ${tripState === false ? " blur-sm" : " blur-0"}`}>
                                <input type="date" disabled={tripState === false ? true : false} required className=" w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[10px] pr-[10px] appearance-none" /><br />
                            </div>
                        </div>
                    </div>
                    <div className=" text-center mt-[20px] w-full">
                        <Buttonss clicks={searchHandler} text="Search" widths="w-[30%] max-[800px]:w-[100%] rounded-md " icon={<SearchIcon />} />
                    </div>
                </div>
            </div>
        </section>
    )
}