import {useState} from 'react'

export default function Login()
{
    const [LoginType,setLoginType]=useState('email')
    const [password,setPassword]=useState('')
    const [userId,setUserId]=useState("")

    //Switch login between Email and Phone
    const switchLogin=()=>{
        if(LoginType==="email"){
            setLoginType("Phone No.")
        }
        else{
            setLoginType("email")
        }  
    }

    // const togglePassword=()=>{
    //     setHide(!hide)
    //     }
    return (
        <div className="h-screen w-full flex flex-row  ">
            <div id="split-1" className="h-screen w-[50%] bg-[#C9FDD7] "></div>
            <div id="split-2" className="h-screen w-[50%] bg-[#79D1C3] "></div>
            <div id="container" className="absolute flex top-[17%] left-[20%] h-[65%] w-[60%]  ">
                <div id="Login Box" className="flex flex-col h-full w-[50%] text-center items-center     gap-5   border-r border-[#6892D5] rounded-l-3xl bg-[#F8FCFB]">
                    <h1 className="text-4xl text-[#799EFF] font-bold mt-[10%]">Login</h1>
                    <input className="border rounded-lg p-2 w-[50%] " placeholder={LoginType} type={LoginType} required value={userId} onChange={(e)=>setUserId(e.target.value)} ></input>
                    <div id="PassDiv" className="flex flex-col w-[50%] h-[10%] justify-start" >
                        <input className="border p-2 w-[90%] rounded-lg" placeholder="Password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} ></input>

                    </div>
                    <button className="hover:text-blue-600"  id="signInButton" /*onClick={handleLogin}*/ >Sign In</button>
                    <button className="hover:text-blue-600" onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button>
                </div>
                <div id="Register Box" className="flex flex-col text-center h-full w-[50%]  border-l border-[#6892D5] rounded-r-3xl bg-[#F8FCFB]">
                    <br ></br>
                    <h2 className="text-4xl text-[#799EFF] font-bold mt-[10%]">Register</h2>
                    {/* <input className="border rounded-lg p-2 w-[50%] " placeholder='email' type='email' required value={email} onChange={(e)=>setUserId(e.target.value)} ></input>
                    <input className="border rounded-lg p-2 w-[50%] " placeholder='password' type='password' required value={password} onChange={(e)=>setUserId(e.target.value)} ></input>
                    <input className="border rounded-lg p-2 w-[50%] " placeholder='UserName' type='text' required value={username} onChange={(e)=>setUserId(e.target.value)} ></input> */}
                </div>
            </div>
        </div>
    )
}