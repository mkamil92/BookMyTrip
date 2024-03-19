import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Hotels from '../pages/Hotels';
import HotelDetails from '../shared/hotels-shared/HotelDetails';
import Buses from '../pages/Buses/buses';
import BusOrderPage from '../pages/Buses/BusesOrder';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Flights from '../pages/Flights/Flight';
import FlightOrders from '../pages/Flights/FlightOrder';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:hotelId' element={<HotelDetails />} />
        <Route path='/buses' element={<Buses />} />
        <Route path='/buses/ordernow' element={<BusOrderPage />}/>
        <Route path='/flights' element={<Flights />}/>
        <Route path='/flights/ordernow' element={<FlightOrders />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default Routers