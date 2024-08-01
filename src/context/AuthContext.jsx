import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Importa useHistory
import { loginRequest, verifyTokenRequest, sendMailRequest, sendMailReset } from "../api/auth"
import Cookies from "js-cookie"

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    /*this mail is for contact homePage*/
    const sendMail = async (data) => {
        try {
            const res = await sendMailRequest(data)
            return res
        } catch (error) {
            throw new Error(error)
        }
    }

    /*this mail is for resetPassword*/
    const sendMailResetPassword = async (data) => {
        try {
            const res = await sendMailReset(data)
            if (res.status === 200) {
                setUser(null);
                setIsAuthenticated(false);
            }
            return res
        } catch (error) {
            return error
        }
    }

    /*this is for Login users*/
    const login = async (user) => {
        try {
            const res = await loginRequest(user)
            setUser(res.data)
            setIsAuthenticated(true);
            if (!res.data.verificado){
                navigate('/resetPassword');
            }
            return res;
        } catch (error) {
            return error
        }
    }

    /*this is for Logout users*/
    const logout = async () => {
        Cookies.remove("token");
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setUser(res.data);
                setIsAuthenticated(true);
                setLoading(false);
                navigate('/intranet');

            } catch (error) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checkLogin();
    }, [history])

    return (
        <AuthContext.Provider value={{
            sendMail,
            sendMailResetPassword,
            login,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
