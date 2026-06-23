import {Link} from "react-router-dom";
import {useState} from "react";


function SignUp(){
    let [signUpData,setSignUpData] = useState();

    let[error, setError] = useState({});

    let formError={};


    let handleChange=(e)=>{
        // console.log("Change")
        let {name, value} = e.target;
        setSignUpData({...signUpData, [name]:value})
        // console.log(signUpData)
    }

    let handleValidate=(signUpData)=>{

        if(!signUpData.email){
            formerror.email="Email is required";
        }

        if(!signUpData.password){
            formerror.password="Password is required";
        }

        if(!signUpData.confirmPassword){
            formerror.confirmPassword="Confirm Password is required";
        }else{
            console.log("Api data: ", signUpData);
        }
        setError(formError)


    }

    let handleClick=()=>{
        handleValidate=(signUpData);
        console.log(signUpData);
        console.log(formError);
    };

    return(
        <>

        <div>I am SignUp Component.</div>
        <div className="grid grid-cols-3 gap-4">
            <div className="..."></div>
            <div className="m-auto">
                <div className="card w-100 h-150 border-1 border-black-200 rounded-sm shadow-lg">
                    <h1 className="card-header text-center font-bold text-xl mt-8">SIGN UP</h1>
                    <div className="card-body w-80 h-100 m-auto">
                        <div>
                            <div>
                                <label className="font-bold text-sm"> Name:</label>
                            </div>
                            <input type="text" name="name" className="border-1 border-black-200 w-full h-8 rounded-md mb-2" onChange={handleChange}/>
                        </div>

                        <div>
                            <div>
                                <label className="font-bold text-sm"> Email:</label>
                            </div>
                            <input type="email" name="email" className="border-1 border-black-200 w-full h-8 rounded-md mb-2" onChange={handleChange}/>
                        </div>

                        <div>
                            <div>
                                <label className="font-bold text-sm"> Password:</label>
                            </div>
                            <input type="password" name="password" className="border-1 border-black-200 w-full h-8 rounded-md mb-2" onChange={handleChange}/>
                        </div>

                        <div>
                            <div>
                                <label className="font-bold text-sm"> Confirm Password:</label>
                            </div>
                            <input type="password" name="confirmPassword" className="border-1 border-black-200 w-full h-8 rounded-md" onChange={handleChange}/>
                        </div>

                        <div>
                            <button className="w-full bg-blue-500 text-white rounded-md mt-8" onClick={handleClick}>
                                Sign Up
                            </button>
                        </div>

                        <Link to="/">Already have an account</Link>
                    </div>
                </div>
            </div>

            <div className="..."></div>
        </div>

        </>
    )
}
export default SignUp;
