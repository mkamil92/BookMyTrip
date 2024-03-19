import { Formik } from 'formik';
import { FaCcVisa } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function BillingForms({ checkValue , checkFunc , tokenSTyleFunc }) {
    const navigate = useNavigate();
    const [submitErr,setSubmitErr] = useState("");

    if (checkValue === "check1") {
        return (
            <div id='form' className=' mx-auto mt-[50px] mb-[80px] bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 1: Your details</h1>
                <Formik
                    initialValues={{ name: '', email: '', phone: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Name is required!';
                        } else if (!values.email) {
                            errors.email = 'Email is required!';
                        }else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)) {
                            errors.email = 'Invalid email address!';
                        }
                         else if (!values.phone) {
                            errors.phone = 'Phone is required!';
                        }
                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        const token = localStorage.getItem("token");
                        const data = JSON.parse(token);
                        setTimeout(() => {
                            if (!token){
                                navigate("/login")
                            }
                        else if (data.email !== values.email){
                            setSubmitErr("Email not found!")
                        }else{
                                checkFunc("check2")
                                console.log(values);
                                setSubmitErr("")
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
                            <form onSubmit={handleSubmit}>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] pl-[20px] mb-1 pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col '>
                                    <p className=' relative top-2 max-[411px]:left-5'>Name</p>
                                    <input type='text' required name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder='First and last name' className={` w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.name ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.name && touched.name && errors.name}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Email</p>
                                    <input type='email' required name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder='example@domain.com' className={`w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.email || submitErr==="Email not found!" ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>{errors.email && touched.email && errors.email}</p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Phone</p>
                                    <input type='number' required name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} placeholder='Eg. +92345 0000000' className={`number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.phone ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>{errors.phone && touched.phone && errors.phone}</p>
                                <div className=' flex justify-center mt-[20px]'>
                                    <button type="submit" disabled={isSubmitting} className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Continue Booking</button>
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px] mt-[10px]'>
                                    {submitErr}
                                </p>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }
    else if (checkValue === "check2") {
        return (
            <div id='form' className=' mx-auto mt-[50px] mb-[80px] bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 2: Your Address</h1>
                <Formik
                    initialValues={{ address: '', postcode: '', country: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.address) {
                            errors.address = 'Enter your complete address!';
                        } else if (!values.postcode) {
                            errors.postcode = 'Enter your country code!';
                        } else if (!values.country) {
                            errors.country = 'Enter your country!';
                        }
                        return errors
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            checkFunc("check3")
                            console.log(values);
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
                            <form onSubmit={handleSubmit}>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] pl-[20px] mb-1 pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col '>
                                    <p className=' relative top-2 max-[411px]:left-5'>Address</p>
                                    <textarea required name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} className={`w-[1050px] h-[60px] ml-[20px] pl-[20px] pr-[20px] pt-[10px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] resize-none ${errors.address ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.address && touched.address && errors.address}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Post code</p>
                                    <input type='number' required name='postcode' value={values.postcode} onChange={handleChange} onBlur={handleBlur} className={`number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.postcode ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.postcode && touched.postcode && errors.postcode}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Country</p>
                                    <input type='text' required name='country' value={values.country} onChange={handleChange} onBlur={handleBlur} className={`w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.country ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.country && touched.country && errors.country}
                                </p>
                                <div className=' flex justify-center mt-[20px]'>
                                    <button type="submit" disabled={isSubmitting} className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Continue Booking</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    } else {
        return (
            <div id='form' className=' mx-auto mt-[50px] mb-[80px] bg-[#fc7042] w-[87%] pt-[20px] pb-[20px] rounded-lg max-[663px]:w-[90%]'>
                <h1 className='text-[20px] text-center mb-[10px] font-serif'>Step 3: Card details</h1>
                <Formik
                initialValues={{ withdrawMethod:'', cardNum: '', securityCode:'', phone: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.withdrawMethod){
                        errors.withdrawMethod= 'Please select a payment method!'
                    }
                     else if (!values.cardNum) {
                        errors.cardNum = 'Enter your card number';
                    }
                     else if (!values.securityCode) {
                        errors.securityCode = 'Enter your security code!';
                    }
                    else if (!values.phone) {
                        errors.phone = 'phone number is required as on card!';
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        tokenSTyleFunc("scale-[100%]")
                        document.getElementById("token").disabled=false
                        document.getElementById("token").style.filter="blur(0px)"
                        document.getElementById("cart").disabled=true
                        document.getElementById("cart").style.filter="blur(5px)"
                        document.getElementById("formList").disabled=true
                        document.getElementById("formList").style.filter="blur(5px)"
                        document.getElementById("form").disabled=true
                        document.getElementById("form").style.filter="blur(5px)"
                        console.log(values);
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
                            <form onSubmit={handleSubmit}>
                                <div className='border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] rounded-lg pt-[10px]'>
                                    <p className=' text-[20px] font-serif font-bold'>Card type</p>
                                    <div className='mt-[20px] flex justify-between max-[521px]:flex-col'>
                                        <label className='flex'>
                                            <input type='radio' name='withdrawMethod' onChange={handleChange} onBlur={handleBlur} className={`mt-[-20px] ${errors.withdrawMethod ? 'border-2 border-red-600' : 'border-none'} mt-[1px]`}/>
                                            <div className=' flex ml-[10px]'>
                                                <FaCcVisa className='mt-[3px] text-[23px] max-[625px]:text-[15px]'/>
                                                <p className=' text-[20px] ml-[10px] max-[625px]:text-[15px]'>VISA</p>
                                            </div>
                                        </label>
                                        <label className='flex'>
                                            <input type='radio' name='withdrawMethod' onChange={handleChange} onBlur={handleBlur} className={`mt-[-20px] ${errors.withdrawMethod ? 'border-2 border-red-600' : 'border-none'} mt-[1px]`}/>
                                            <div className=' flex ml-[10px]'>
                                                <BiMoneyWithdraw className='mt-[3px] text-[23px] max-[625px]:text-[15px]'/>
                                                <p className=' text-[20px] ml-[10px] max-[625px]:text-[15px]'>Debit</p>
                                            </div>
                                        </label>
                                        <label className='flex'>
                                            <input type='radio' name='withdrawMethod' onChange={handleChange} onBlur={handleBlur} className={`mt-[-20px] ${errors.withdrawMethod ? 'border-2 border-red-600' : 'border-none'} mt-[1px]`}/>
                                            <div className=' flex ml-[10px]'>
                                                <FaCcMastercard className='mt-[3px] text-[23px] max-[625px]:text-[15px]'/>
                                                <p className=' text-[20px] ml-[10px] max-[625px]:text-[15px]'>Mastercard</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.withdrawMethod && touched.withdrawMethod && errors.withdrawMethod}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Card number</p>
                                    <input type='number' required name='cardNum' onChange={handleChange} onBlur={handleBlur} value={values.cardNum}  className={`number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.cardNum ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.cardNum && touched.cardNum && errors.cardNum}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Security code</p>
                                    <input type='text' required name='securityCode' onChange={handleChange} onBlur={handleBlur} value={values.securityCode}  className={`w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.securityCode ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.securityCode && touched.securityCode && errors.securityCode}
                                </p>
                                <div className=' flex justify-between border-1 ml-[20px] mr-[20px] mb-1 pl-[20px] pr-[60px] pt-[10px] pb-[10px] rounded-lg max-[411px]:pr-[10px] max-[411px]:pl-[10px] max-[411px]:flex-col'>
                                    <p className=' relative top-2 max-[411px]:left-5'>Phone</p>
                                    <input type='number' required name='phone' onChange={handleChange} onBlur={handleBlur} value={values.phone}  placeholder='Exact name as on the card' className={`number w-[1050px] h-[40px] ml-[20px] pl-[20px] rounded-lg outline-none max-[411px]:ml-[10px] max-[411px]:w-[94%] ${errors.phone ? 'border-2 border-red-600' : 'border-none'} max-[411px]:mt-[10px]`} />
                                </div>
                                <p className=' text-center text-red-600 font-extrabold ml-[20px] mr-[20px]'>
                                    {errors.phone && touched.phone && errors.phone}
                                </p>
                                <div className=' flex justify-center mt-[20px]'>
                                    <button type="submit" disabled={isSubmitting} className=' bg-red-600 pt-[10px] pb-[10px] pl-[20px] pr-[20px] text-white font-extrabold rounded-3xl hover:bg-red-500'>Book Now!</button>
                                </div>
                            </form>
                        )
                    }
                </Formik>
            </div>
        )
    }
}