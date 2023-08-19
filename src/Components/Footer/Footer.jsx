import "./Footer.scss";
import React from "react";
import home from "/img/home_icon.png";
import categories from "/img/categories_icon.png";
import pick from "/img/pick_icon.png";
import myPage from "/img/myPage_icon.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-item" onClick={() => navigate("/")}>
                    <img src={home}></img>
                    <div>홈</div>
                </div>
                <div className="footer-item" onClick={() => navigate("/categories")}>
                    <img src={categories}></img>
                    <div>카테고리</div>
                </div>
                <div className="footer-item" onClick={() => navigate("/picks")}>
                    <img src={pick}></img>
                    <div>찜</div>
                </div>
                <div className="footer-item" onClick={() => navigate("/myPage")}>
                    <img src={myPage}></img>
                    <div>마이페이지</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
