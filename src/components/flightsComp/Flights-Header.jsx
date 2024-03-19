import Buttonss from "../busesComp/button";
import "./Flights.css"

export default function FlightHeader({extraClasses}) {
    const navHandler = ()=>{
        console.log("nav")
    }

    return(
        <section className={`w-full h-full mb-[120px] max-[800px]:mb-[290px] ${extraClasses}`}>
            <div className=" w-full h-full">
                <div className=" Flights-box w-full h-[680px]">
                    <div className="w-full h-[680px] flex flex-col items-center justify-center">
                        <h1 className="w-[800px] text-center font-bold text-[60px] text-white leading-[70px] max-[837px]:text-[40px] max-[837px]:leading-[50px] max-[837px]:w-[600px] max-[617px]:w-[400px] max-[447px]:text-[30px] max-[447px]:w-[80%] max-[341px]:text-[25px]">Plan Your Trip With The Explorers</h1>
                        <p className="w-[600px] mt-[20px] text-[20px] text-center text-gray-200 max-[837px]:text-[16px] max-[837px]:w-[500px] max-[617px]:w-[300px] max-[447px]:w-[220px] max-[341px]:text-[13px]">Streamline your travel with us, connecting you to diverse cities seamlessly.</p>
                        <Buttonss text="Explore More" widths = "w-[170px] mt-[30px]" clicks={navHandler}/>
                    </div>
                </div>
            </div>
        </section>
    )
}