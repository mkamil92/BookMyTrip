import Buttonss from "./button";
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import CloseIcon from '@mui/icons-material/Close';
import DropDown from "./searchMenu";
import tripContext from "../../context/busesTripContext/TripsContext";

export default function BookingsForm(){
    const startRef = useRef();
    const endRef = useRef();
    const dateRef = useRef();
    const [openMenuOne , setOpenMenuOne] = useState(false);
    const [openMenuTwo , setOpenMenuTwo] = useState(false);
    const [startValue,setstartValue] = useState("");
    const [endValue,setendValue] = useState("");
    const {setTripdata} = useContext(tripContext);

    const startingHandler =(e)=>{
        setstartValue(e.target.value)
        if (!openMenuOne){
            setOpenMenuOne(true)
        }
    }

    const endingHandler = (e)=>{
        setendValue(e.target.value)
        if (!openMenuTwo){
            setOpenMenuTwo(true)
        }
    }

    const searchHandler = (e)=>{
        setTripdata({
            fromValue: startRef.current.value,
            toValue:endRef.current.value,
            date:dateRef.current.value
        })
    }
    return(
        <section className="">
            <div className=" absolute w-[80%] left-[10%] top-[660px]">
                <div className=" flex w-[175px] pl-[35px] pt-[10px] pb-[4px] bg-[#2e2d2b]">
                <h2 className=" font-semibold text-[15px] text-white">Buses</h2>
                <h2 className="text-[#f5b342] font-semibold ml-1 text-[15px]">Travels</h2>
                </div>
                <form className=" bg-white shadow-lg pt-[20px] pb-[20px] max-[800px]:pl-[20px] max-[800px]:pr-[20px]">
                    <div className="flex justify-center w-full max-[800px]:flex-col">
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <FaLocationDot className=" text-[#2e2d2b] text-[20px] absolute left-[7px] top-[10px] "/>
                        {
                            openMenuOne?(
                                <CloseIcon onClick={()=> setOpenMenuOne(false)} className=" text-[#2e2d2b] cursor-pointer text-[20px] absolute right-[7px] top-[10px] hidden"/>
                            ):(
                                ""
                            )
                        }
                        <input onClick={()=> {
                            setOpenMenuOne(!openMenuOne)
                             setOpenMenuTwo(false)
                             }} id="inpOne" required onChange={startingHandler} ref={startRef} type="text" placeholder="Start Location" className=" w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]"/><br />
                        <DropDown val = {startValue} setOps={setOpenMenuOne} opens={openMenuOne} ids="1"/>
                        </div>
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <FaLocationDot className=" text-[#2e2d2b] text-[20px] absolute left-[7px] top-[10px]"/>
                        {
                            openMenuTwo?(
                                <CloseIcon onClick={()=> setOpenMenuTwo(false)} className=" text-[#2e2d2b] cursor-pointer text-[20px] absolute right-[7px] top-[10px] hidden"/>
                            ):(
                                ""
                            )
                        }
                        <input onClick={()=> {
                        setOpenMenuTwo(!openMenuTwo)
                         setOpenMenuOne(false)
                         }} id="inpTwo" required  onChange={endingHandler} ref={endRef} type="text" placeholder="End Location" className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[30px]"/><br />
                        <DropDown val = {endValue} setOps={setOpenMenuTwo} opens={openMenuTwo} ids="2"/>
                        </div>
                        <div className=" border-2 ml-[20px] mr-[20px] w-full relative max-[800px]:ml-[0] max-[800px]:mt-[10px] max-[800px]:mb-[10px]">
                        <input type="date" ref={dateRef} required  className="w-full h-[40px] bg-gray-300 outline-none text-[#2e2d2b] pl-[10px] pr-[10px] appearance-none"/><br />
                        </div>
                    </div>
                    <div className=" text-center mt-[20px]">
                    <Buttonss clicks={searchHandler} text="Search" widths = "w-[30%] max-[800px]:w-[100%] rounded-md" icon= {<SearchIcon />}/>
                    </div>
                </form>
            </div>
        </section>
    )
}