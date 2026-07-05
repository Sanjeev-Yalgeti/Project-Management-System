import {Navigate,Outlet} from 'react-router-dom'
import {useAuth} from '../hooks/useAuth.js'
import { Hatch } from 'ldrs/react'
import 'ldrs/react/Hatch.css'

// Default values shown

const ProtectedRoute=()=>{
    const {isAuthenticated,isLoading}=useAuth();
    if(isLoading)
    {
        return(
            <div classname="h-screen w-full bg-white flex justify-center items-center   ">
                <Hatch
                    size="28"
                    stroke="4"
                    speed="3.5"
                    color="black" 
                />
            </div>
        )
    }
    return isAuthenticated ?< Outlet /> :<Navigate to='/login' replace/>;
};
export default ProtectedRoute;