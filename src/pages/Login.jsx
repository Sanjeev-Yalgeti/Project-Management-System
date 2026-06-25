import { useState } from "react";
// import {useNavigate} from 'react-router-dom'
export default function Login(/*{isLogin}*/) {
  // let isHidden=false
  const [LoginType, setLoginType] = useState("email");
  const [password, setPassword] = useState("");
  // const [userEmail,setUserEmail]=useState("")
  // const [userPhone,setUserPhone]=useState("")
  const [hide, setHide] = useState(true);
  // const navigate=useNavigate()
  const [userId, setUserId] = useState("");
  //handle login and apis
  // const handleLogin=()=>{
  //     let userIsLogin=false
  //     if(userIsLogin)
  //     {
  //         isLogin(true)
  //         navigate("/Dashboard")
  //     }
  // }
  //Switch login between Email and Phone
  const switchLogin = () => {
    if (LoginType === "email") {
      setLoginType("Phone No.");
    } else {
      setLoginType("email");
    }
  };

  // const togglePassword=()=>{
  //     setHide(!hide)
  //     }
  return (
    <div className="h-screen w-full flex flex-row  ">
      <div id="split-1" className="h-screen w-[50%] bg-[#C9FDD7] "></div>
      <div id="split-2" className="h-screen w-[50%] bg-[#79D1C3] "></div>
      <div
        id="container"
        className="absolute flex top-[17%] left-[20%] h-[65%] w-[60%]  "
      >
        <div
          id="Login Box"
          className="flex flex-col h-full w-[50%] text-center items-center     gap-5   border-r border-[#6892D5] rounded-l-3xl bg-[#F8FCFB]"
        >
          <h1 className="text-4xl text-[#799EFF] font-bold mt-[10%]">Login</h1>
          <input
            className="border rounded-lg p-2 w-[50%] "
            placeholder={LoginType}
            type={LoginType}
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <div
            id="PassDiv"
            className="flex flex-col w-[50%] h-[10%] justify-start"
          >
            <input
              className="border p-2 w-[90%] rounded-lg"
              placeholder="Password"
              type={hide ? "password" : "text"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button
            className="hover:text-blue-600"
            id="signInButton" /*onClick={handleLogin}*/
          >
            Sign In
          </button>
          <button className="hover:text-blue-600" onClick={switchLogin}>
            {LoginType === "email"
              ? "Sign In using Phone"
              : "Sign in Using Email"}
          </button>
        </div>
        <div
          id="Register Box"
          className="flex flex-col text-center h-full w-[50%]  border-l border-[#6892D5] rounded-r-3xl bg-[#F8FCFB]"
        >
          {/* <h1 className="text-7xl font-bold text-[#799EFF] mt-10">New to Us?</h1> */}
          <br></br>
          <h2 className="text-4xl text-[#799EFF] font-bold mt-[10%]">
            Register
          </h2>
        </div>
      </div>
    </div>
  );
}
