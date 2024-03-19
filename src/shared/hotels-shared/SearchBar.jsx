import React, { useState} from 'react'
import '../../styles/hotels-styles/searchBar.css';
import { Link } from 'react-router-dom';
import { Col, Form, FormGroup } from 'reactstrap';
import data from '../../data/hotels-data/hotels.json';

    
 function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    var [num, setGuests] = useState(0);
    var [arrival, setArrival] = useState('');
    var [destination, setDestination] = useState('');

                  
  return (
   <div>
        <div className="searchBar">
            <Form className='search align-items-center gap-5'>
                <FormGroup className="d-flex gap-3 formGroup formGroupFast">
                    <span>
                        <i class="ri-map-pin-line"></i>
                    </span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder='Where are you going?' onChange={(event) => {setSearchTerm(event.target.value);}}  />
                    </div>
                    
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-calendar-line"></i>
                    </span>
                    <div>
                        <h6>Arrival Time</h6>
                        <input type="date"  placeholder='Arrival Time' onChange={(e) => {setArrival(e.target.value);}} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-calendar-line"></i>
                    </span>
                    <div>
                        <h6>Destination Time</h6>
                        <input type="date"  placeholder='Destination Time'  onChange={(e) => {setDestination(e.target.value);}} />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-group-line"></i>
                    </span>
                    <div>
                        <h6>Guests</h6>
                        <input type="number"  placeholder='No Of Guests' onChange={(e) => {setGuests(e.target.value);}} />
                    </div>
                </FormGroup>
                <span className="searchIcon" type="submit" >
                    <i class="ri-search-line"></i>
                </span>
            </Form>
        </div>
   
    <br />
    <br />
    <div className="row template_Container d-flex justify-content-center">
          {
            
            data.filter((val) => {
                var ArrivalInput = arrival;
                var DestinationInput = destination;
                var Date_1 = val.arrival;
                var Date_2 = val.departure;
                
                var D1 = new Date(Date_1);
                var D2 = new Date(Date_2);
                var D3 = new Date(ArrivalInput);
                var D4 = new Date(DestinationInput);

                if(searchTerm === ""){
                  return val;
                }
                else if(val.city.toLowerCase().includes(searchTerm.toLowerCase()) && val.guests >= num )
                {
                  if (D3.getTime() <= D2.getTime()&& D3.getTime() >= D1.getTime()) 
                  {
                    if (D4.getTime() <= D2.getTime()&& D4.getTime() >= D1.getTime())
                    {
                      
                        console.log("Date is in between the Date 1 and Date 2"); 
                        return val;
                    }
                    else 
                    {
                    console.log("Date is not in between the Date 1 and Date 2");
                    }
                  } 
                  else 
                  {
                  console.log("Date is not in between the Date 1 and Date 2");
                  }
                }
              })
              .map((val) => {
                return(
                  <div className="card col-3 my-2   template" key={val.id} style={{width: 300, marginInline: 5, paddingBlock:10}}>
                    <img className='card-img-top' src={val.image} style={{height: "300px"}} width={300} alt="" />
                    <div className='card-body'>
                      <h3 className='hotel' style={{color:"black"}}>{val.hotel}<span className='city' style={{color:"black"}}> ({val.city})</span></h3>
                      <Link to={`/hotels/${val.id}`} className='bt' >
                         View Details
                      </Link>
                    </div>
                  </div>   
                )
              }).slice(0,20)
          }
        </div>
    </div>
  )
}

export default SearchBar