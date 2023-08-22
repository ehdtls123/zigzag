import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <RecoilRoot> {/* 전역 스테이트 관리를 위한 루트 컴포넌트*/}
        <BrowserRouter> {/* 라우터를 위한 리액트 라우터 돔 컴포넌트*/}
            <App />
        </BrowserRouter>
    </RecoilRoot>
);
