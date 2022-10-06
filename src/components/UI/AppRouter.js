import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import Error from "../../pages/Error";
import PostIdPage from "../../pages/PostIdPage";
import {routes} from "../../router/routes";

const AppRouter = () => {

    return (
        <div>
            <Switch>


                {routes.map(route =>
                            <Route
                                component={route.component}
                                path={route.path}
                                exact={route.exact}
                            />
                )};


                {/*<Route path={"/about"}>*/}
                {/*    <About/>*/}
                {/*</Route>*/}
                {/*<Route exact={true} path={"/posts"}>*/}
                {/*    <Posts/>*/}
                {/*</Route>*/}
                {/*<Route exact={true} path={"/posts/:id"}>*/}
                {/*    <PostIdPage/>*/}
                {/*</Route>*/}
                {/*<Route path={"/error"}>*/}
                {/*    <Error/>*/}
                {/*</Route>*/}




                <Redirect to={'/posts'}/>
            </Switch>
        </div>
    );
};

export default AppRouter;