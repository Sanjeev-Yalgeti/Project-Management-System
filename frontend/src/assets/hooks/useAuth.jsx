import {useContext,createContext,useState,useEffect} from 'react'
import api from '../api/client.js'
const AuthContext=createContext(null);
export function AuthProvider({children}){
    const [user,setUser]=useState(null);
    const[isLoading,setIsLoading]=useState(true);//to not load teh page before authentication
    
    
    //basically this useeffect has a function verifySession 
    // which calls an api to verify if the user is logged in ,
    // if tehre is an error which means usr not logged so set user to
    //  null and 'finally' executed which sets IsLoading to false i.e teh page finally loads
    
    useEffect(()=>{
        const verifySession=async ()=>{
            try{
                const response=await api.get('')//insert api link
            } catch(error){
                setUser(null);
            }finally{
                setIsLoading(false)
            }
        }
        verifySession();
    },[]);


    const login= async (username,password)=>{
        const response=await api.post('auth/login',{email,password});//replcae auth/login with actual api 
        setUser(response.data.user)//not using try catch block as login error is handled at serverside and handling error here might overwrite custom tailored error of server 
        }

    const logout= async ()=>{
        try{
            await api.post('')//insert logout api 
        }catch(error){
            console.error("Logout failed",error)
        }finally{
            setUser(null)
        }

    }
    return (<AuthContext.Provider value={{user,login,logout,isAuthenticated:!!user}}>
            {children}
        </AuthContext.Provider>);
};
export function useAuth(){
    return useContext(AuthContext);
}