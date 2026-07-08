import {useState} from 'react'
import { motion} from 'framer-motion';
export default function Login()
{
    const [LoginType,setLoginType]=useState('email')
    const [password,setPassword]=useState('')
    const [username,setUsername]=useState("")
    const [display,setDisplay]=useState('login')
    const [userFirstName,setUserFirstName]=useState('')
    const [userLastName,setUserLastName]=useState('')
    const [userMail,setUserMail]=useState('')
    
    

    

    //Switch login between Email and Phone
    const switchLogin=()=>{
        if(LoginType==="email"){
            setLoginType("Phone No.")
        }
        else{
            setLoginType("email")
        }  
    }
    //switch between regiuster and login
    const switchDisplay=()=>{
        if(display==='login'){
            setDisplay("register");
        }
        else{
            setDisplay("login");
        }
    } 

    return (
        <div className="h-screen w-full flex flex-row bg-[#091a24] items-center justify-center p-4">
            //   <div id="container" className="relative flex text-center overflow-hidden justify-between h-[75%] w-[60%] z-0 text-white border-2 shadow-[0_0_5px_#00f3ff,0_0_15px_#00f3ff,inset_0_0_8px_#00f3ff] border-[#12d4d0]  ">
                 <div id="Login Box" className={` md:w-2/3 h-full w-1/2 absolute top-0 left-0 flex flex-col justify-center px-12 gap-5 ${display === 'login' ? 'pointer-events-auto' : 'pointer-events-none'} z-20 `}>
                     <motion.div
                        animate={{ 
                        opacity: display==='login' ? 1 : 0,
                        x:display==='login'?0: -100
                        }}
                        transition={{ duration: 0.35 }}
                        className="z-20 w-1/2 md:w-2/3"
                    > 
                        <form className='flex flex-col gap-5'>
                            <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Login</h1>
                            <div className="relative ">
                                <input 
                                    className="border rounded-lg p-2 w-[80%] " 
                                    placeholder={LoginType} 
                                    type={LoginType} 
                                    required 
                                    oninput="this.value=this.value.toLowerCase()"
                                    value={username} 
                                    onChange={(e)=>setUsername(e.target.value)} >
                                </input>
                            </div>
                            <div className="relative">
                                <input 
                                    className="border rounded-lg p-2 w-[80%] " 
                                    placeholder="Password" 
                                    type="password" 
                                    required 
                                    value={password} 
                                    onChange={(e)=>setPassword(e.target.value)} >
                                </input>
                            </div>
                            <div className="relative">
                                <button 
                                    id="LogInButton" 
                                    /*onClick={handleLogin}*/ 
                                    type="submit" 
                                    className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-[80%] p-2 font-bold">
                                    Log In
                                    </button>
                            </div>
                            <div className="flex flex-col justify-evenly gap-2 p-2">
                                <button className="hover:text-[#12d4d0] " type='reset' onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button>
                                <button className="hover:text-[#12d4d0]" type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>  
                                <a className="hover:text-[#12d4d0] relative " href='/admin'>Admin Login(Company Only)</a>
                            </div>
                        </form>
                    </motion.div>
                </div>
                <motion.div
                        className="absolute inset-0 bg-linear-to-br from-[#12d4d0] to-[#0c4b51] pointer-events-none z-10 hidden md:flex w-full h-full flex-col justify-center items-center text-center p-8 "
                        animate={{
                            clipPath: display==='login' ?
                            [
                                'polygon(0% 0%, 55% 0%, 40% 100%, 0% 100%)',     // Start at register layout
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
                                'polygon(55% 0%, 100% 0%, 100% 100%, 40% 100%)' // Settle at login layout
                            ]:
                            [
                                'polygon(55% 0%, 100% 0%, 100% 100%, 40% 100%)', // Start at login layout     
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
                                'polygon(0% 0%, 55% 0%, 40% 100%, 0% 100%)'
                            ]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut", // Smooth acceleration and deceleration for the rolling wipe look
                            times:[0,0.5,1]
                        }}
                        >
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 text-white text-center w-[35%]"
                            animate={{
                                left: display === "login" ? "62%" : "8%",
                                opacity: 1
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut"
                            }}
                        >
                        <h1 className="text-6xl font-bold p-5 ">
                        {display === "login" ? "Welcome Back!" : "Heyy There!"}
                        </h1>
                        <p className="text-lg italic p-2 ">
                            {display === "login"
                                ? "Enter your credentials, So that we can verify you!!"
                                : "Create an account and level up your management game."}
                        </p>
                        </motion.div>
                    </motion.div>
                <div id="Register Box" className={`w-1/2 md:w-3/5 h-full absolute top-0 right-[-5%] text-center px-12 flex flex-col ${display === 'register' ? 'pointer-events-auto' : 'pointer-events-none'} justify-center px-12 gap-5 lg:px-16 z-20  `}>
                        <motion.div
                                animate={{
                                    opacity: display==='register' ? 1 : 0,
                                    x:display==='register'?0:50

                                 }}
                                transition={{ duration: 0.75 }}
                                className="z-20 w-full h-full items-center  flex flex-col justify-center"
                        > 
                            <form className='flex flex-col gap-5 justify-center max-w-md text-center'>
                                <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Register</h1>
                                <div className='flex gap-5 w-full'>                                                    {/*Full Name*/}
                                    <div className="relative flex-1">
                                        <input 
                                            id="firstName"
                                            className="border rounded-lg p-2 w-full " 
                                            placeholder='First Name' 
                                            type='text' 
                                            lowercase
                                            required 
                                            value={userFirstName}
                                            onChange={(e)=>setUserFirstName(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className="relative flex-1">
                                        <input 
                                            id="lastName"
                                            className="border rounded-lg p-2 w-full " 
                                            placeholder='Last Name' 
                                            type='text' 
                                            required 
                                            value={userLastName}
                                            onChange={(e)=>setUserLastName(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                </div>
                                <div className="relative w-full">                                                       {/* Email Div */}
                                    <input 
                                        id="registerEmail"
                                        className="border rounded-lg p-2 w-full " 
                                        placeholder='email' 
                                        type='email' 
                                        required 
                                        value={userMail} //set value
                                        onChange={(e)=>setUserMail(e.target.value)} 
                                    >
                                    </input>
                                </div>
                                <div className="relative">                                                          {/*Password Div*/}
                                    <input 
                                        className="border rounded-lg p-2 w-full " 
                                        placeholder="Password" 
                                        type="password" 
                                        required 
                                        value={password} 
                                        onChange={(e)=>setPassword(e.target.value)} >
                                    </input>
                                </div>
                                <div className="relative">
                                    <button 
                                        id="RegisterBtn" 
                                        /*onClick={handleLogin}*/ 
                                        type="submit" 
                                        className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-full p-2 font-bold">
                                        Register
                                        </button>
                                </div>
                                <button className="hover:text-[#12d4d0] relative " type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>
                                
                            </form>

                        </motion.div>
                </div>
            </div>
    
        </div>
                
    )
}
// #091a24 dark bluish bg #12d4d0-cyan  gradient to #0c4b51 
// https://youtube.com/shorts/jcHMpZWQ484?si=NGabCJHsdf8YG_8S   
