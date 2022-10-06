import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../../router/routes";
import {AuthContext} from "../../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {

    const {isLoading, isAuth, setIAuth} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )};
                <Redirect to={'/posts'}/>
            </Switch>

            : <Switch>
                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )};
                <Redirect to={'/login'}/>
            </Switch>


    );
};

export default AppRouter;