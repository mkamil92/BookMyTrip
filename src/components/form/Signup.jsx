import { Formik } from "formik";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupComp() {
  const navigate = useNavigate();
  useEffect(()=>{
    const tokenData = localStorage.getItem("token");
    if (tokenData){
      navigate("/home");
    }
  },[])
    return(
        <div className=" w-[600px] pt-[20px] pb-[20px] rounded-2xl shadow-lg mx-auto my-5 max-[659px]:w-[90%]">
        <div className=" flex justify-center">
            <h1 className="text-[#f5b342] font-bold">B</h1>
            <h1 className="text-[#2e2d2b] font-bold">ook</h1>
        </div>
        <Formik
          initialValues={{ fName:'',lName:'', email: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.fName){
                errors.fName="First name is required!"
            }
            else if (!values.lName){
                errors.lName="Last name is required!"
            }
            else if (!values.email) {
              errors.email = 'Email is required!';
            } else if (
              !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(values.email)
            ) {
              errors.email = 'Invalid email address!';
            }
            else if(
                !/^(?=.*[A-Z])(?=.*\d).+/.test(values.password)
            ){
                errors.password = 'Password must contains a capital letter and a number!';
            }
            else if(
                values.password.length<8
            ){
                errors.password = 'Password is too short!';
            }else if(values.password.length>18){
                errors.password = 'Password is too long!';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                let userData = localStorage.getItem("user");
                let data = JSON.parse(userData);
                let found = data.find((u)=> u.email.toLowerCase()===values.email.toLowerCase())
                if (!found){
                    data.push(values)
                localStorage.setItem("user",JSON.stringify(data));
                alert("Signup Successfull");
                }else{
                    alert("User Already Exists!")
                }
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className=" text-center">
                <input 
                type="text"
                name="fName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fName}
                placeholder="Enter your first name"
                className=" border-1 border-blue-700 w-[500px] h-[40px] p-[10px] rounded-md outline-none ml-[20px] mr-[20px] max-[659px]:w-[85%]"
                /><br />
                <p className=" text-red-600 font-bold mt-[10px] text-[15px] ml-[40px] mr-[40px]">{errors.fName && touched.fName && errors.fName}</p>           
                <input 
                type="text"
                name="lName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lName}
                placeholder="Enter your second name"
                className="border-1 border-blue-700 w-[500px] h-[40px] p-[10px] rounded-md outline-none ml-[20px] mr-[20px] max-[659px]:w-[85%]"
                /><br />
                <p className=" text-red-600 font-bold mt-[10px] text-[15px] ml-[40px] mr-[40px]">{errors.lName && touched.lName && errors.lName}</p>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email address"
                className="border-1 border-blue-700 w-[500px] h-[40px] p-[10px] rounded-md outline-none ml-[20px] mr-[20px] max-[659px]:w-[85%]"
              /><br />
              <p className=" text-red-600 font-bold mt-[10px] text-[15px] ml-[40px] mr-[40px]">{errors.email && touched.email && errors.email}</p>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
                className="border-1 border-blue-700 w-[500px] h-[40px] p-[10px] rounded-md outline-none ml-[20px] mr-[20px] max-[659px]:w-[85%]"
              /><br />
              <p className=" text-red-600 font-bold mt-[10px] text-[15px] ml-[40px] mr-[40px]">{errors.password && touched.password && errors.password}</p>
              <button type="submit" disabled={isSubmitting} className="w-[500px] bg-[#f5b342] text-white text-[15px] rounded-md pt-[10px] pb-[10px] mt-[20px] max-[659px]:w-[85%]">
                Submit
              </button>
            </form>
          )}
        </Formik>
        <p className=" text-center mt-[20px] ml-[10px] mr-[10px]">Already have an account? <Link to="/login">Login</Link></p>
      </div>
    )
}