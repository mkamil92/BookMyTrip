import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data/hotels-data/hotels.json';
import '../../styles/hotels-styles/hotelDetails.css';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Formik } from 'formik';
import HotelBillToken from '../../components/hotels-components/token';

const HotelDetails = () => {
    const [submitErr, setSubmitErr] = useState("");
    const [tokenStyle, setTokenStyle] = useState("scale-0");
    const navigate = useNavigate();

    const i = useParams().hotelId;

    const dataHotel = data[i - 1];
    const { city, hotel, description, image, price, arrival, departure } = data[i - 1];
    const imgUrl = `../../${image}`;
    console.log(imgUrl);
    return (

        <section>
            <Container id='details'>
                <Row className='mt-4 mb-3'>
                    <Col lg="8">
                        <div className='tourContent'>
                            <img src={imgUrl} height={380} width={800} alt='' />

                            <div className='tourInfo'>
                                <h2 style={{fontSize: "25px",fontWeight: "1000"}}> {hotel} ({city})</h2>
                                <div className='tourDescription'>
                                    {description}
                                </div>
                                <div className='tourDates'>
                                    <h6 style={{fontSize: "18px",fontWeight: "700"}}>Available Arrival Dates: <span>{arrival}</span></h6>
                                    <h6 style={{fontSize: "18px",fontWeight: "700"}}>Available Departure Dates: <span>{departure}</span></h6>
                                </div>
                                <div className='tourPrice'>
                                    <i class="ri-hand-coin-line"></i><span>  Price: {price}</span>
                                </div>

                            </div>
                        </div>
                    </Col>
                    <Col lg='4'>
                        <div className="form">
                            <Formik
                                initialValues={{ name: '', email: '', phone: '', city: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.name) {
                                        errors.name = 'Name is required!';
                                    }
                                    else if (!values.phone) {
                                        errors.phone = 'Phone is required!';
                                    }
                                    else if (!values.email) {
                                        errors.email = 'Email is required!';
                                    }
                                    else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
                                        errors.email = 'Invalid email address!';
                                    }
                                    else if (!values.city) {
                                        errors.city = "City is required!";
                                    }
                                    return errors
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    const token = localStorage.getItem("token");
                                    const data = JSON.parse(token);
                                    setTimeout(() => {
                                        if (!data){
                                            navigate("/login");
                                        }
                                        else if (data.email !== values.email) {
                                            setSubmitErr("Email not found!");

                                        } else {
                                            setSubmitErr("");
                                            setTokenStyle("scale-[100%]");
                                            document.getElementById("hotelToken").disabled = false;
                                            document.getElementById("hotelToken").style.filter = "blur(0px)";
                                            document.getElementById("nav-bar").disabled = true;
                                            document.getElementById("nav-bar").style.filter = "blur(5px)";
                                            document.getElementById("footer").disabled = true;
                                            document.getElementById("footer").style.filter = "blur(5px)";
                                            document.getElementById("details").disabled = true;
                                            document.getElementById("details").style.filter = "blur(5px)";
                                        }
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {
                                    ({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                    }) => (
                                        <Form onSubmit={handleSubmit}>
                                            <FormGroup className="d-flex gap-3 formGroup formGroupFast">
                                                <span>
                                                    <i class="ri-account-circle-line"></i>
                                                </span>
                                                <div>
                                                    <h6>Full Name: </h6>
                                                    <input type="text" required name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Full Name...' />
                                                    <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                                        {errors.name && touched.name && errors.name}
                                                    </p>
                                                </div>

                                            </FormGroup>
                                            <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                                                <span>
                                                    <i class="ri-phone-line"></i>
                                                </span>
                                                <div>
                                                    <h6>Phone Number: <span className='mandatory'>*</span></h6>
                                                    <input type="number" required name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Number...' />
                                                    <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                                        {errors.phone && touched.phone && errors.phone}
                                                    </p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                                                <span>
                                                    <i class="ri-mail-add-line"></i>
                                                </span>
                                                <div>
                                                    <h6>Email: <span className='mandatory'>*</span> </h6>
                                                    <input type="email" required name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Your Email...' />
                                                    <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                                        {errors.email && touched.email && errors.email}
                                                    </p>
                                                </div>
                                            </FormGroup>
                                            <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                                                <span>
                                                    <i class="ri-building-line"></i>
                                                </span>
                                                <div>
                                                    <h6>City</h6>
                                                    <input type="text" required name='city' value={values.city} onChange={handleChange} onBlur={handleBlur} placeholder='Enter You City Name...' />
                                                    <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                                        {errors.city && touched.city && errors.city}
                                                    </p>
                                                </div>
                                            </FormGroup>
                                            <button type="submit" disabled={isSubmitting} className="pay text-center" style={{color:"black"}} >
                                                Pay Now
                                            </button>
                                            <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px] mt-[10px]'>
                                                {submitErr}
                                            </p>
                                        </Form>
                                    )
                                }
                            </Formik>
                        </div>

                    </Col>
                </Row>
            </Container>
            <HotelBillToken toknstyle={tokenStyle} hotelsData={dataHotel} />
        </section>

    )
}


export default HotelDetails