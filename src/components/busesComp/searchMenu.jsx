import { useEffect, useState } from "react";
import citiesArr from "../../data/buses/citiesData";

export default function DropDown({ opens, ids, val , setOps }) {
    const [arr, setArr] = useState([]);
    let defArr = ["Karachi", "Lahore", "Islamabad", "Rawalpindi"]
    const [noFound, setNofound] = useState("");
    useEffect(() => {
        const filteredArray = citiesArr.filter(city => city.toLowerCase().slice(0, val.length) === val.toLowerCase());
        if (filteredArray.length !== 20) {
            if (filteredArray.length === 0) {
                setNofound("Not Found!")
            } else {
                setArr(filteredArray)
                setNofound("")
            }
        }
        else {
            setArr([])
        }

    }, [opens, ids, val])

    return (
        <div id={ids} className={`scrolls overflow-hidden overflow-y-auto cursor-pointer border-2 z-2 mt-[10px] shadow-xl dropDown absolute w-[100%] h-[200px] bg-[white] rounded-md ${opens ? " scale-[100%]" : " scale-0"}`}>
            {
                ids === "1" ? (
                    arr.length === 0 ? (
                        <>
                            {
                                defArr.map((el,ind) => {
                                    return <button onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("inpOne").value=defArr[ind]
                                        setOps(!opens)
                                    }} id={ind} key={ind} className="btn hover:bg-slate-600 w-[100%] text-start p-[10px]">{el}</button>
                                })
                            }
                        </>
                    ) : (
                        noFound === "Not Found!" ? (
                            <p>{noFound}</p>
                        ) : (
                            arr.map((elem, ind) => {
                                return (
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("inpOne").value=arr[ind]
                                        setOps(!opens)
                                    }} id={ind} key={ind} className="btn hover:bg-slate-600 w-[100%] text-start p-[10px]">{elem}</button>
                                )
                            })
                        )
                    )
                ) : (
                    arr.length === 0 ? (
                        <>
                            {
                                defArr.map((el,ind) => {
                                   return <button onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("inpTwo").value=defArr[ind]
                                    setOps(!opens)
                                }} id={ind} key={ind} className="btn hover:bg-slate-600 w-[100%] text-start p-[10px]">{el}</button>
                                })
                            }
                        </>
                    ) : (
                        noFound === "Not Found!" ? (
                            <p>{noFound}</p>
                        ) : (
                            arr.map((elem, ind) => {
                                return (
                                    <button onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("inpTwo").value=arr[ind]
                                        setOps(!opens)
                                    }} id={ind} key={ind} className="btn hover:bg-slate-600 w-[100%] text-start p-[10px]">{elem}</button>
                                )
                            })
                        )
                    )
                )
            }
        </div>
    )
}