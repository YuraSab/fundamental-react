import Posts from "./pages/Posts";
import {BrowserRouter, Link, Redirect, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/Error";
import AppRouter from "./components/UI/AppRouter";
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

function App() {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }else {
            setIsAuth(false)
        }
        setIsLoading(false);
    }, [])


    return (
        <AuthContext.Provider value={{
            isAuth: isAuth,
            setIsAuth: setIsAuth,
            isLoading: isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;