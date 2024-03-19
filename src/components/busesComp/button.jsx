
export default function Buttonss({widths ,text ,icon ,clicks ,disable , clas}) {
    const clickHandler =(e)=>{
        e.preventDefault();
        clicks();
    }
    return(
        <div className=" relative">
        <button disabled={disable} onClick={clickHandler} className={` buttons text-[15px] rounded-2xl ${widths} h-[40px] ${clas} hover:bg-left-bottom`}>
            {icon} {text}
        </button>
        </div>
    )
}