import {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';
// import RadialWipe from '../assets/components/RadialWipe.jsx'
export default function Login()
{
    const [LoginType,setLoginType]=useState('email')
    const [password,setPassword]=useState('')
    const [userId,setUserId]=useState("")
    const [display,setDisplay]=useState('login')
    
    
    // Reusable configuration variants for the input form fading animation states
    const fadeVariants = {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };
    // // login form
    // const renderLoginForm=()=>{
    //     <form className='flex flex-col gap-5'>
    //         <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Login</h1>
    //             <div className="relative ">
    //                 <input 
    //                     className="border rounded-lg p-2 w-[80%] " 
    //                     placeholder={LoginType} 
    //                     type={LoginType} 
    //                     required 
    //                     oninput="this.value=this.value.toLowerCase()"
    //                     value={userId} 
    //                     onChange={(e)=>setUserId(e.target.value)} >
    //                 </input>
    //             </div>
    //             <div className="relative">
    //                 <input 
    //                     className="border rounded-lg p-2 w-[80%] " 
    //                     placeholder="Password" 
    //                     type="password" 
    //                     required 
    //                     value={password} 
    //                     onChange={(e)=>setPassword(e.target.value)} >
    //                 </input>
    //             </div>
    //             <div className="relative">
    //                 <button 
    //                     id="LogInButton" 
    //                     /*onClick={handleLogin}*/ 
    //                     type="submit" 
    //                     className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-[80%] p-2 font-bold">
    //                     Log In
    //                     </button>
    //             </div>
    //             <div className="flex flex-col justify-evenly gap-2 p-2">
    //                 <button className="hover:text-[#12d4d0] " type='reset' onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button>
    //                 <button className="hover:text-[#12d4d0]" type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>  
    //             </div>
    //         </form>
    // }
    // //Register form
    // const renderRegisterForm=()=>{
    //     <form className='flex flex-col gap-5 justify-center max-w-md text-center'>
    //         <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Register</h1>
    //         <div className='flex gap-5 w-full'>                                                    {/*Full Name*/}
    //             <div className="relative flex-1">
    //                 <input 
    //                     id="firstName"
    //                     className="border rounded-lg p-2 w-full " 
    //                     placeholder='First Name' 
    //                     type='text' 
    //                     lowercase
    //                     required 
    //                     value='' //set value
    //                     // onChange={(e)=>setUserId(e.target.value)} change it
    //                 >
    //                 </input>
    //             </div>
    //             <div className="relative flex-1">
    //                 <input 
    //                     id="lastName"
    //                     className="border rounded-lg p-2 w-full " 
    //                     placeholder='Last Name' 
    //                     type='text' 
    //                     required 
    //                     value='' //set value
    //                     // onChange={(e)=>setUserId(e.target.value)} change it
    //                 >
    //                 </input>
    //             </div>
    //         </div>
    //         <div className="relative w-full">                                                       {/* Email Div */}
    //             <input 
    //                 id="registerEmail"
    //                 className="border rounded-lg p-2 w-full " 
    //                 placeholder='email' 
    //                 type='email' 
    //                 required 
    //                 value='' //set value
    //                 // onChange={(e)=>setUserId(e.target.value)} change it
    //                     >
    //             </input>
    //         </div>
    //         <div className="relative">                                                          {/*Password Div*/}
    //             <input 
    //                 className="border rounded-lg p-2 w-full " 
    //                 placeholder="Password" 
    //                 type="password" 
    //                 required 
    //                 value={password} 
    //                 onChange={(e)=>setPassword(e.target.value)} >
    //             </input>
    //         </div>
    //         <div className="relative">
    //             <button 
    //                 id="RegisterBtn" 
    //                 /*onClick={handleLogin}*/ 
    //                 type="submit" 
    //                 className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-full p-2 font-bold">
    //                 Register
    //             </button>
    //         </div>
    //         <button className="hover:text-[#12d4d0] relative " type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>
    //     </form>
    // }
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
    //Real important piece of code in comments ;-;
    //   <div id="container" className="relative flex text-center overflow-hidden justify-between top-[17%] left-[20%] h-[75%] w-[60%] z-0 text-white border-2 shadow-[0_0_5px_#00f3ff,0_0_15px_#00f3ff,inset_0_0_8px_#00f3ff] border-[#12d4d0]  ">
    //             <div id="Login Box" className={` md:w-2/3 h-full w-1/2 absolute top-0 left-0 flex flex-col justify-center px-12 gap-5 ${display === 'login' ? 'pointer-events-auto' : 'pointer-events-none'} z-20 `}>
    //                 <motion.div
    //                     animate={{ 
    //                         opacity: display==='login' ? 1 : 0,
    //                         x:display==='login'?0: -100
    //                      }}
    //                     transition={{ duration: 0.35 }}
    //                     className="z-20 w-1/2 md:w-2/3"
    //                 > 
    //                     <form className='flex flex-col gap-5'>
    //                         <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Login</h1>
    //                         <div className="relative ">
    //                                 <input 
    //                                     className="border rounded-lg p-2 w-[80%] " 
    //                                     placeholder={LoginType} 
    //                                     type={LoginType} 
    //                                     required 
    //                                     oninput="this.value=this.value.toLowerCase()"
    //                                     value={userId} 
    //                                     onChange={(e)=>setUserId(e.target.value)} >
    //                                 </input>
    //                         </div>
    //                         <div className="relative">
    //                             <input 
    //                                 className="border rounded-lg p-2 w-[80%] " 
    //                                 placeholder="Password" 
    //                                 type="password" 
    //                                 required 
    //                                 value={password} 
    //                                 onChange={(e)=>setPassword(e.target.value)} >
    //                             </input>
    //                         </div>
    //                         <div className="relative">
    //                             <button 
    //                                 id="LogInButton" 
    //                                 /*onClick={handleLogin}*/ 
    //                                 type="submit" 
    //                                 className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-[80%] p-2 font-bold">
    //                                 Log In
    //                                 </button>
    //                         </div>
    //                         <div className="flex flex-col justify-evenly gap-2 p-2">
    //                             <button className="hover:text-[#12d4d0] " type='reset' onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button>
    //                             <button className="hover:text-[#12d4d0]" type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>  
    //                         </div>
    //                     </form>
    //                 </motion.div>
    //             </div>
    //             <motion.div
    //                     className="absolute inset-0 bg-linear-to-br from-[#12d4d0] to-[#0c4b51] pointer-events-none z-10 hidden md:flex w-full h-full flex-col justify-center items-center text-center p-8 "
    //                     animate={{
    //                         clipPath: display==='login' ?
    //                         [
    //                             'polygon(0% 0%, 55% 0%, 40% 100%, 0% 100%)',     // Start at register layout
    //                             'polygon(0% 50%,0% 0%,100% 0%, 100% 100%, 50% 100%)',     
    //                             'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
    //                             'polygon(50% 0%, 100% 100%, 50% 100%)',     
    //                             'polygon(40% 0%, 100% 0%, 100% 100%, 55% 100%)' // Settle at login layout
    //                         ]:
    //                         [
    //                             'polygon(40% 0%, 100% 0%, 100% 100%, 55% 100%)', // Start at login layout
    //                             'polygon(50% 0%, 100% 100%, 50% 100%)',     
    //                             'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
    //                             'polygon(0% 50%,0% 0%, 100% 100%,100% 0%, 50% 100%)',     
    //                             'polygon(0% 0%, 55% 0%, 40% 100%, 0% 100%)'
    //                         ]
    //                     }}
    //                     transition={{
    //                         duration: 1,
    //                         ease: "easeInOut", // Smooth acceleration and deceleration for the rolling wipe look
    //                         times:[0,0.3,0.5,0.7,1]
    //                     }}
    //                     />
    //             <div id="Register Box" className={`w-1/2 md:w-3/5 h-full absolute top-0 right-[-5%] text-center px-12 flex flex-col ${display === 'register' ? 'pointer-events-auto' : 'pointer-events-none'} justify-center px-12 gap-5 lg:px-16 z-20  `}>
    //                     <motion.div
    //                             animate={{
    //                                 opacity: display==='register' ? 1 : 0,
    //                                 x:display==='register'?0:50

    //                              }}
    //                             transition={{ duration: 0.35 }}
    //                             className="z-20 w-full h-full items-center  flex flex-col justify-center"
    //                     > 
    //                         <form className='flex flex-col gap-5 justify-center max-w-md text-center'>
    //                             <h1 className="text-5xl tracking-wide font-bold m-[10%] ">Register</h1>
    //                             <div className='flex gap-5 w-full'>                                                    {/*Full Name*/}
    //                                 <div className="relative flex-1">
    //                                     <input 
    //                                         id="firstName"
    //                                         className="border rounded-lg p-2 w-full " 
    //                                         placeholder='First Name' 
    //                                         type='text' 
    //                                         lowercase
    //                                         required 
    //                                         value='' //set value
    //                                         // onChange={(e)=>setUserId(e.target.value)} change it
    //                                             >
    //                                     </input>
    //                                 </div>
    //                                 <div className="relative flex-1">
    //                                     <input 
    //                                         id="lastName"
    //                                         className="border rounded-lg p-2 w-full " 
    //                                         placeholder='Last Name' 
    //                                         type='text' 
    //                                         required 
    //                                         value='' //set value
    //                                         // onChange={(e)=>setUserId(e.target.value)} change it
    //                                             >
    //                                     </input>
    //                                 </div>
    //                             </div>
    //                             <div className="relative w-full">                                                       {/* Email Div */}
    //                                 <input 
    //                                     id="registerEmail"
    //                                     className="border rounded-lg p-2 w-full " 
    //                                     placeholder='email' 
    //                                     type='email' 
    //                                     required 
    //                                     value='' //set value
    //                                     // onChange={(e)=>setUserId(e.target.value)} change it
    //                                         >
    //                                 </input>
    //                             </div>
    //                             <div className="relative">                                                          {/*Password Div*/}
    //                                 <input 
    //                                     className="border rounded-lg p-2 w-full " 
    //                                     placeholder="Password" 
    //                                     type="password" 
    //                                     required 
    //                                     value={password} 
    //                                     onChange={(e)=>setPassword(e.target.value)} >
    //                                 </input>
    //                             </div>
    //                             <div className="relative">
    //                                 <button 
    //                                     id="RegisterBtn" 
    //                                     /*onClick={handleLogin}*/ 
    //                                     type="submit" 
    //                                     className="bg-linear-to-b from-[#12d4d0] to-[#0c4b51] rounded-full w-full p-2 font-bold">
    //                                     Register
    //                                     </button>
    //                             </div>
    //                             <button className="hover:text-[#12d4d0] relative " type='reset' onClick={switchDisplay}>{display==="login"?"New to us ? Sign up.": "Already have an acoount? Sign in."}</button>
    //                         </form>

    //                     </motion.div>
    //                     {/* <button className="hover:text-[#12d4d0]" onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button> */}
    //             </div>
    //         </div>
    // <div id="container" className="relative flex text-center overflow-hidden justify-between top-[17%] left-[20%] h-[75%] w-[60%] z-0 text-white border-2 shadow-[0_0_5px_#00f3ff,0_0_15px_#00f3ff,inset_0_0_8px_#00f3ff] border-[#12d4d0]  "></div>
    return (
        <div className="h-screen w-full flex flex-row bg-[#091a24]">
            <div id="container" className="relative flex text-center overflow-hidden justify-between top-[17%] left-[20%] h-[75%] w-[60%] z-0 text-white border-2 shadow-[0_0_5px_#00f3ff,0_0_15px_#00f3ff,inset_0_0_8px_#00f3ff] border-[#12d4d0]  ">
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
                            value={userId} 
                            onChange={(e)=>setUserId(e.target.value)} >
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
                                'polygon(0% 50%,0% 0%,100% 0%, 100% 100%, 50% 100%)',     
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
                                'polygon(50% 0%, 100% 100%, 50% 100%)',     
                                'polygon(40% 0%, 100% 0%, 100% 100%, 55% 100%)' // Settle at login layout
                            ]:
                            [
                                'polygon(40% 0%, 100% 0%, 100% 100%, 55% 100%)', // Start at login layout
                                'polygon(50% 0%, 100% 100%, 50% 100%)',     
                                'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',  // Expand to solid block mid-way
                                'polygon(0% 50%,0% 0%, 100% 100%,100% 0%, 50% 100%)',     
                                'polygon(0% 0%, 55% 0%, 40% 100%, 0% 100%)'
                            ]
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut", // Smooth acceleration and deceleration for the rolling wipe look
                            times:[0,0.3,0.5,0.7,1]
                        }}
                        />
                <div id="Register Box" className={`w-1/2 md:w-3/5 h-full absolute top-0 right-[-5%] text-center px-12 flex flex-col ${display === 'register' ? 'pointer-events-auto' : 'pointer-events-none'} justify-center px-12 gap-5 lg:px-16 z-20  `}>
                        <motion.div
                                animate={{
                                    opacity: display==='register' ? 1 : 0,
                                    x:display==='register'?0:50

                                 }}
                                transition={{ duration: 0.35 }}
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
                                            value='' //set value
                                            // onChange={(e)=>setUserId(e.target.value)} change it
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
                                            value='' //set value
                                            // onChange={(e)=>setUserId(e.target.value)} change it
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
                                        value='' //set value
                                        // onChange={(e)=>setUserId(e.target.value)} change it
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
                        {/* <button className="hover:text-[#12d4d0]" onClick={switchLogin}>{LoginType==="email"?"Sign In using Phone": "Sign in Using Email"}</button> */}
                </div>
            </div>
        </div>
    )
}
// #091a24 dark bluish bg #12d4d0-cyan  gradient to #0c4b51 
// https://youtube.com/shorts/jcHMpZWQ484?si=NGabCJHsdf8YG_8S   