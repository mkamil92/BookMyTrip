import { useNavigate } from "react-router";
import { usePDF } from "react-to-pdf";
import Card from 'react-bootstrap/Card';
import Buttonss from "../busesComp/button";

export default function HotelBillToken({ toknstyle, hotelsData }) {
    console.log(hotelsData)
    const navigate = useNavigate();
    const { toPDF, targetRef } = usePDF({ filename: 'token.pdf' });

    const downloadPdf = () => {
        toPDF()
        setTimeout(() => {
            localStorage.removeItem("BookingCart");
            navigate("/home");
            document.getElementById("nav-bar").disabled = false;
            document.getElementById("nav-bar").style.filter = "blur(0)";
            document.getElementById("footer").disabled = false;
            document.getElementById("footer").style.filter = "blur(0)";
            document.getElementById("details").disabled = false;
            document.getElementById("details").style.filter = "blur(0)";
        }, 3000)
    }

    if (hotelsData) {
        return (
            <section id="hotelToken" className={`w-full transition ${toknstyle}`}>
                <div className=" fixed left-[50%] bottom-[20%] translate-x-[-50%] pt-[30px] pb-[30px] w-[700px] h-[300px] bg-white shadow-lg max-[747px]:w-[95%]">
                    <div className="flex justify-center">
                        <h2 className="text-[#2e2d2b] font-extrabold font-serif">To</h2>
                        <h2 className="text-[#f5b342] font-extrabold font-serif">ken</h2>
                    </div>
                    <Card ref={targetRef} className=' fixed left-[50%] translate-x-[-50%] w-[600px] mr-[30px] max-[647px]:w-[90%] max-[800px]:mr-0'>
                        <div className='bg-[#0000ff4f] text-white pl-[22px] pt-2 pb-2 text-[12px]'></div>
                        <div className=' w-full flex justify-between pl-[20px] pr-[20px] max-[800px]:flex-col'>
                            <div className=' mt-[35px] mb-[35px] mr-[20px]'>
                                <div>
                                    <img src={hotelsData.image} className='w-[100px]' />
                                    <p className=' mt-[10px] tracking-widest'></p>
                                    {hotelsData.hotel}
                                </div>
                                <Card.Subtitle>{hotelsData.description}</Card.Subtitle>
                            </div>
                            <div className=' border-l max-[800px]:border-none'>
                                <div>
                                    <p className='text-[15px] text-muted text-end mt-[30px] max-[800px]:mt-0 max-[324px]:mt-[30px]'>Hotel Price</p>
                                    <div className=' flex justify-end'>
                                        <Card.Title className='mr-[5px]'>PKR</Card.Title>
                                        <p className='text-[19px] mt-[-1px] text-[#f5b342]'>{hotelsData.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Card>
                    <div className="flex justify-center mt-[20px]">
                        <Buttonss clicks={downloadPdf} text="Download Now!" widths=" cursor-pointer pl-[20px] pr-[20px]" />
                    </div>
                </div>
            </section>
        )
    }

}