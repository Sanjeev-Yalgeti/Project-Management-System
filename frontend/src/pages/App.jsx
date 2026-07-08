import ProtectedRoute from '../assets/components/ProtectedRoute.jsx'
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom'
import {AuthProvider} from '../assets/hooks/useAuth.jsx'
//Pages
import Login from './Login.jsx'
import Dashboard from './Dashboard.jsx'
export default function App(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />

                    {/* Authenticated/Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                        <Route path='/dashboard' element={<Dashboard />}/>
                    </Route>
                    
                    {/* Global Fallback */}
                    <Route path='*' element={<Navigate to='/login' replace />}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}