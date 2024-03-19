import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default function FlightSeats({seat , ind ,clicks}) {
    const [isTrue,setIsTrue] = useState(false)
    const dropDownHandler=(e)=>{
        e.preventDefault();
        setIsTrue(!isTrue);
        clicks(seat, ind)
    }
    return(
        <Dropdown.ItemText key={ind} onClick={dropDownHandler} className=" cursor-pointer"><span className={`border-2 pt-[2px] pb-[2px] pl-[7px] pr-[7px] ${isTrue?"border-[#f5b342] bg-[#f5b342] text-[white]":"border-[#2e2d2b]"}`}>B</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{seat}</Dropdown.ItemText>
    )
}