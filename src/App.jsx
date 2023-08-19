import "./App.scss";
import { useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import Picks from "./Pages/Picks/Picks";
import MyPage from "./Pages/Mypage/Mypage";

const App = () => {
    const pages = [
        {
            path: "/",
            component: <Home />,
        },
        {
            path: "/categories",
            component: <Categories />,
        },
        {
            path: "/picks",
            component: <Picks />,
        },
        {
            path: "/myPage",
            component: <MyPage />,
        },
    ];

    return (
        <div className="App">
            <Header />
            <div className="app-contents">
                <Routes>
                    {pages.map((v) => {
                        return (
                            <Route
                                key={v.path}
                                path={v.path}
                                element={v.component}
                            />
                        );
                    })}
                </Routes>
            </div>
            <Footer />
        </div>
    );
};

export default App;
