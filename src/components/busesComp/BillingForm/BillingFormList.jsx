import "./Billing.css"
import { useState } from 'react';
import BillingForms from "./BillingForm";
import BillToken from "../finalToken/Token";

export default function BillingFormsLists({billStyle}) {
    const [check,setCheck] = useState("check1");
    const [tokenStyle,setTokenStyle] = useState("scale-0");
    console.log(check)
    return (
        <section className={`mt-[70px] transition ${billStyle}`}>
            <div id="formList">
            <div className=' flex justify-between ml-[100px] mr-[100px] max-[966px]:ml-[30px] max-[966px]:mr-[30px]'>
                <p>Step1</p>
                <p>Step2</p>
                <p>Step3</p>
            </div>
            <div className=' flex ml-[100px] mr-[100px] max-[966px]:ml-[30px] max-[966px]:mr-[30px]'>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" defaultChecked checked={check==="check1"?true:false} onChange={()=>setCheck("check1")}/>
                        <span className="radio-checkbox absolute left-0 top-[1px] w-[20px] h-[20px] rounded-full cursor-pointer"></span>
                    </label>
                </div>
                <div className={`w-[100%] h-[15px] bg-[#0000ffa6] rounded-2xl mt-1 ml-[10px] mr-[3px] ${check==="check1"?" opacity-[0.5]":" opacity-1"}`}></div>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" disabled={check==="check1"?true:false} checked={check==="check2"?true:false} onChange={()=>setCheck("check2")}/>
                        <span className={`radio-checkbox absolute  left-0 top-[1px] w-[20px] h-[20px] rounded-full ${check==="check1"?" opacity-[0.5] cursor-default":" opacity-1 cursor-pointer"}`}></span>
                    </label>
                </div>
                <div className={`w-[100%] h-[15px] bg-[#0000ffa6] rounded-2xl mt-1 ml-[10px] mr-[3px] ${check==="check1" ||check==="check2"?" opacity-[0.5]":" opacity-1"}`}></div>
                <div>
                    <label className="radio-container relative">
                        <input type="radio" name="radio-group" disabled={check==="check1" ||check==="check2" ?true:false} checked={check==="check3"?true:false} onChange={()=>setCheck("check3")}/>
                        <span className={`radio-checkbox absolute left-0 top-[1px] w-[20px] h-[20px] rounded-full ${check==="check1" ||check==="check2"?" opacity-[0.5] cursor-default":" opacity-1 cursor-pointer"}`}></span>
                    </label>
                </div>
            </div>
            </div>
            <BillingForms checkValue={check} checkFunc={setCheck} tokenSTyleFunc={setTokenStyle}/>
            <BillToken toknstyle={tokenStyle}/>
        </section>
    )
}