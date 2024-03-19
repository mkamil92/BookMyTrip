import Card from 'react-bootstrap/Card';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

export default function BestFlights() {
    return(
        <section className='pt-[140px] mb-[60px]'>
        <div>
            <div className=' flex flex-col items-center text-center'>
                <div className='flex justify-center ml-[20px] mr-[20px] mb-[20px]'>
                    <h2 className='text-[#2e2d2b] text-[30px] max-[388px]:text-[20px]'>Best Services</h2>
                    <h2 className='text-[#f5b342] text-[30px] ml-[8px] max-[388px]:text-[20px]'>AirLines</h2>
                </div>
                <p className='text-[#585858]  max-[388px]:text-[13px]  ml-[40px] mr-[40px]'>Unleash unparalleled automotive excellence with our premium flight services – where luxury meets precision on every flight.</p>
            </div>
            <div className=' flex justify-center max-[553px]: flex-wrap'>
                <div className='relative w-[500px] ml-[10px] mr-[10px] mt-12 max-[1107px]:w-[40%] max-[553px]:w-[80%]'>
                    <img src='/images/flightsImages/airblue.jpg' className='w-[100%] rounded-xl' />
                    <Card style={{ width: '78%' }} className='absolute top-[86%] left-[11%] '>
                        <Card.Body>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px] max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Air Line</Card.Text>
                                <Card.Text className=' ml-[37px] text-[14px] font-bold  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    Airblue
                                </Card.Text>
                            </div>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Popular</Card.Text>
                                <Card.Text className='ml-[40px] text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    Karachi - Lahore
                                </Card.Text>
                            </div>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Ratings</Card.Text>
                                <div className=' flex mt-[3px] ml-[40px] text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStarHalf className=' text-[#f5b342]' />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className='w-[500px] relative ml-[10px] mr-[10px] mt-12 max-[1107px]:w-[40%] max-[553px]:w-[80%] max-[553px]:mt-32'>
                    <img src='/images/flightsImages/shaheen.jpg' className='w-[100%] rounded-xl' />
                    <Card style={{ width: '78%' }} className='absolute top-[86%] left-[11%]'>
                        <Card.Body>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Air Line</Card.Text>
                                <Card.Text className=' ml-[37px] text-[14px] font-bold  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    Shaheen
                                </Card.Text>
                            </div>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Popular</Card.Text>
                                <Card.Text className=' ml-[40px] text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    Karachi - Islamabad
                                </Card.Text>
                            </div>
                            <div className='flex'>
                                <Card.Text className="mb-2 text-muted text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]">Ratings</Card.Text>
                                <div className=' flex mt-[3px] ml-[40px] text-[14px]  max-[790px]:text-[12px] max-[680px]:text-[10px] max-[553px]:text-[14px] max-[382px]:text-[12px] max-[341px]:text-[10px]'>
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStar className=' text-[#f5b342]' />
                                    <IoMdStarOutline className=' text-[#f5b342]' />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </section>
    )
}