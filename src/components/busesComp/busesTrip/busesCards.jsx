import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Buttonss from "../button";
import { useState } from 'react';
import BussSeat from './Seat';
import { useNavigate } from 'react-router-dom';

export default function BusCard({ s, idss, totalPrice, toFound, fromFound ,fullDate }) {
    const navigate = useNavigate();
    const [isSelects, setIsselects] = useState([]);

    const BookHandler =()=>{
        let priceTotal= totalPrice*isSelects.length;
        const travelingData ={
            travelFrom:fromFound.from,
            travelTo:toFound.dest,
            totalCost:priceTotal,
            busService:s,
            seats:isSelects,
            date:fullDate
        }
        localStorage.setItem("BookingCart",JSON.stringify(travelingData))
        setIsselects([])
        navigate("/buses/ordernow")
    }
    const addSeats = (seat, indx) => {
        if (isSelects.length === 0) {
            console.log("add")
            setIsselects([...isSelects, seat])
        }
        else {
            let found = isSelects.find(sel => seat.toLowerCase() === sel.toLowerCase())
            if (found) {
                const newArray = [...isSelects];
                isSelects.map((elm, ind) => {
                    if (elm === seat) {
                        newArray.splice(ind, 1)
                        setIsselects(newArray)
                        console.log("remove");
                    }
                })
            } else {
                setIsselects([...isSelects, seat])
                console.log("add");
            }
        }
    }
    
    return (
        <Card id={idss} className=" cardTravel mt-[40px] ml-[20px] mr-[20px]">
            <div className=" w-full flex justify-center">
                <img variant="top" className="p-[20px] w-[200px] h-[100px]" src={`/images/${s.servName}.png`} alt={s.servName} />
            </div>
            <Card.Body className=" text-center">
                <Card.Title>{s.servName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{fromFound.from}  -  {toFound.dest}</Card.Subtitle>
                <Card.Title>{s.time}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">PKR {totalPrice}</Card.Subtitle>
                <Dropdown className="mt-[20px] ">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' bg-green-900'>
                        Check Seats
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <p className=" text-center text-muted cursor-default">--  Available {s.availableSeats.length}/{s.totalSeats}  --</p>
                        {
                            s.availableSeats.map((seats, inds) => {
                                return (
                                    <BussSeat seat={seats} ind={inds} clicks={addSeats}/>
                                )
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
                <Buttonss text="Book Now!" widths="w-[130px]  rounded-md mt-[30px]" clicks={BookHandler} disable={isSelects.length===0?true:false} clas={isSelects.length===0?" cursor-default opacity-80 hover:bg-right-bottom ":"opacity-[1] cursor-pointer hover:bg-left-bottom"}/>
            </Card.Body>
        </Card>
    )
}