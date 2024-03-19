import { useContext } from "react";
import paymentContext from "../../../context/paymentOrderContext/PaymentContext";
import Card from 'react-bootstrap/Card';
import Buttonss from "../button";
import { usePDF } from 'react-to-pdf';
import { useNavigate } from "react-router-dom";

export default function BillToken({toknstyle}) {
    const navigate = useNavigate();
    const { toPDF, targetRef } = usePDF({filename: 'token.pdf'});
    const {paymentData} = useContext(paymentContext);

    const downloadPdf = ()=>{
        toPDF()
        setTimeout(()=>{
            localStorage.removeItem("BookingCart");
            navigate("/home");
        },3000)
    }

    if (paymentData){
        return(
            <section id="token" className={`w-full transition ${toknstyle}`}>
                <div className=" fixed bottom-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-[30px] pb-[30px] w-[700px] bg-white shadow-lg max-[747px]:w-[95%]">
                    <div className="flex justify-center">
                        <h2 className="text-[#2e2d2b] font-extrabold font-serif">To</h2>
                        <h2 className="text-[#f5b342] font-extrabold font-serif">ken</h2>
                    </div>
                <Card ref={targetRef}  className=' mx-auto  w-[600px] mr-[30px] max-[647px]:w-[90%] max-[800px]:mr-0'>
                        <div className='bg-[#0000ff4f] text-white pl-[22px] pt-2 pb-2 text-[12px]'>{paymentData.date}</div>
                            <div className=' w-full flex justify-between pl-[20px] pr-[20px] max-[800px]:flex-col'>
                            <div className=' mt-[35px] mb-[35px] mr-[20px]'>
                                <div>
                                <img src={`/images/${paymentData.busService.servName}.png`} className='w-[100px] h-[50px]'/>
                                <p className=' mt-[10px] tracking-widest'>{paymentData.busService.servName}</p>
                                </div>
                                <Card.Title>{paymentData.busService.time}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted mt-3">{paymentData.travelFrom}&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;&nbsp;{paymentData.travelTo}</Card.Subtitle>  
                            </div>
                            <div className=' border-l max-[800px]:border-none'>
                                <div className=' mt-[20px] max-[800px]:mt-0'>
                                    <p className='text-[14px] ml-[20px]'>Selected Seats</p>
                                    <div className='flex justify-center flex-wrap w-[150px]'>
                                        {
                                            paymentData.seats.map((seat)=>{
                                                return <div className='cursor-default ml-[10px] mr-[10px] border-1 p-1 mt-2 border-[#f5b342] text-[#f5b342] bg-[#2e2d2b]'>{seat}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div>
                                <p className='text-[15px] text-muted text-end mt-[30px] max-[800px]:mt-0 max-[324px]:mt-[30px]'>Seat Price</p>
                                <div className=' flex justify-end'>
                                <Card.Title className='mr-[5px]'>PKR</Card.Title>
                                <p className='text-[19px] mt-[-1px] text-[#f5b342]'>{paymentData.totalCost/paymentData.seats.length}</p>
                                </div>
                                </div>
                            </div>
                            </div>
                            
                        </Card>
                        <div className="flex justify-center mt-[20px]">
                        <Buttonss clicks={downloadPdf} text="Download Now!" widths=" cursor-pointer pl-[20px] pr-[20px]"/>
                        </div>
                </div>
            </section>
        )
    }
    
}