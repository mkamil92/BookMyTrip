import Card from 'react-bootstrap/Card';

export default function PopDestinations() {
    return (
        <section className=' pt-[80px] ml-[20px] mr-[20px]'>
            <div className=' flex flex-col items-center text-center'>
                <div className='ml-[20px] mr-[20px] mb-[20px]'>
                    <div className='flex justify-center mb-[20px]'>
                    <h2 className='text-[#2e2d2b] text-[30px] max-[388px]:text-[20px]'>Popular</h2>
                    <h2 className='text-[#f5b342] text-[30px] ml-[8px] max-[388px]:text-[20px]'>Destinations</h2>
                    </div>
                    <p className='text-[#585858] max-[388px]:text-[13px]'>From historical cities to natural specteculars, Come see the best of the world!</p>
                </div>
                <div className=' flex flex-wrap justify-center'>
                    <Card style={{ width: '100%', borderRadius: '20px' , boxShadow:'1px 1px 10px gray'  }} className=' cardss ml-[10px] mr-[10px] mt-4'>
                        <Card.Img variant="top" src="/images/Karachi.jpg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        <Card.Body>
                            <div className='flex'>
                                <div className=' font-extrabold text-[30px]'>01</div>
                                <div className='w-[40px] h-[5px] bg-[#f5b342] rounded-3xl mt-[22px] ml-[10px]'></div>
                            </div>
                            <div className='flex justify-between font-bold mt-3 text-[15px]'>
                                <div>Karachi</div>
                                <div>RAW</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%', borderRadius: '20px' , boxShadow:'1px 1px 10px gray' }} className='cardss ml-[10px] mr-[10px] mt-4'>
                        <Card.Img variant="top" src="/images/lahore.jpg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        <Card.Body>
                            <div className='flex'>
                                <div className=' font-extrabold text-[30px]'>02</div>
                                <div className='w-[40px] h-[5px] bg-[#f5b342] rounded-3xl mt-[22px] ml-[10px]'></div>
                            </div>
                            <div className='flex justify-between font-bold mt-3 text-[15px]'>
                                <div>Lahore</div>
                                <div>RAW</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%', borderRadius: '20px', boxShadow:'1px 1px 10px gray'  }} className='cardss ml-[10px] mr-[10px] mt-4'>
                        <Card.Img variant="top" src="/images/Murre.jpeg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        <Card.Body>
                            <div className='flex'>
                                <div className=' font-extrabold text-[30px]'>03</div>
                                <div className='w-[40px] h-[5px] bg-[#f5b342] rounded-3xl mt-[22px] ml-[10px]'></div>
                            </div>
                            <div className='flex justify-between font-bold mt-3 text-[15px]'>
                                <div>Murre</div>
                                <div>RAW</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '100%', borderRadius: '20px', boxShadow:'1px 1px 10px gray'  }} className='cardss ml-[10px] mr-[10px] mt-4'>
                        <Card.Img variant="top" src="/images/Islamabad.jpeg" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }} />
                        <Card.Body>
                            <div className='flex'>
                                <div className=' font-extrabold text-[30px]'>04</div>
                                <div className='w-[40px] h-[5px] bg-[#f5b342] rounded-3xl mt-[22px] ml-[10px]'></div>
                            </div>
                            <div className='flex justify-between font-bold mt-3 text-[15px]'>
                                <div>Islamabad</div>
                                <div>RAW</div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
    )
}