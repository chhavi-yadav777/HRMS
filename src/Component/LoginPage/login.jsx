import {Link} from "react-router-dom";
import {useState} from "react";




function Login(){

    let [loginData,setLoginData] = useState();

    let handleChange = (e)=>{
        console.log("Change")
        let {name, value}= e.target;
        console.log(name)
        console.log(value)
        setLoginData({...loginData, [name]:value})
        console.log(loginData)
    }

    return(
        <> 

        <div>I am Login Component.</div>  
        <div className="grid grid-cols-3 gap-4">
            <div className="..."></div>
            <div className="m-auto" >
                <div className="card w-100 h-150 border-1 border-black-200 rounded-sm shadow-lg">
                    <h1 className="card-header text-center font-bold text-xl mt-8">LOGIN</h1>
                    <div className="card-body w-80 h-100 m-auto">
                        <div>
                            <div>
                                <label className="font-bold text-sm"> Email:</label>
                            </div>
                            <input type="email" name="email" className="border-1 border-black-200 w-full h-8 rounded-md mb-2 "onChange={handleChange}/>
                        </div>

                        <div>
                            <div>
                                <label className="font-bold text-sm"> Password:</label>
                            </div>
                            <input type="email" name="password" className="border-1 border-black-200 w-full h-8 rounded-md "onChange={handleChange}/>
                        </div>

                        <div>
                            <div>
                                <label className="font-bold text-sm"> Confirm Password:</label>
                            </div>
                            <input type="email" name="confirmPassword" className="border-1 border-black-200 w-full h-8 rounded-md " onChange={handleChange}/>
                        </div>

                        <div>
                            <button className="w-full bg-blue-500 text-white rounded-md mt-8">
                                Login
                            </button>
                        </div>

                        <Link to="/SignUpPage">Dont't have an account</Link>
                    </div>
                </div>
                
            </div>

            
            <div className="..."></div>
        </div>
             
        </>
    )
}
export default Login;