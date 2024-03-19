import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import FlightSeats from './FlightSeat';
import Buttonss from '../../busesComp/button';
import { useNavigate } from 'react-router';

export default function FlightCards({ s, idss , toFound, fromFound , fullDate }) {
    const [isSelects, setIsselects] = useState([]);
    const navigate = useNavigate();

    const BookHandler =()=>{
        let totalPrice = parseInt(s.price.replace(/,/g, ''))*isSelects.length;
        let finalPrice = totalPrice.toLocaleString();
        const travelingData ={
            travelFrom:fromFound.from,
            travelTo:toFound.dest,
            totalCost:finalPrice,
            busService:s,
            seats:isSelects,
            date:fullDate
        }
        localStorage.setItem("BookingCart",JSON.stringify(travelingData))
        setIsselects([])
        navigate("/flights/ordernow")
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
    return(
        <Card id={idss} className=" cardTravel mt-[80px] ml-[20px] mr-[20px] max-[1017px]:mt-[140px] max-[800px]:mt-[50px] max-[529px]:mt-[140px]">
            <div className=" w-full flex justify-center">
                <img variant="top" className="p-[20px] w-[200px] h-[200px]" src={`/images/flightsImages/${s.airline}.png`} alt={s.airline} />
            </div>
            <Card.Body className=" text-center">
                <Card.Title>{s.airline}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{fromFound.from}  -  {toFound.dest}</Card.Subtitle>
                <Card.Title>{s.time}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">PKR {s.price}</Card.Subtitle>
                <Dropdown className="mt-[20px] ">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className=' bg-green-900'>
                        Check Seats
                    </Dropdown.Toggle>
                    <Dropdown.Menu className=' z-[2] '>
                        <p className=" text-center text-muted cursor-default">--  Available {s.availableSeats.length}/{s.totalSeats}  --</p>
                        {
                            s.availableSeats.map((seats, inds) => {
                                return (
                                    <FlightSeats seat={seats} ind={inds} clicks={addSeats}/>
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