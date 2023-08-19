import React from "react";
import "./Home.scss";
import item1 from "/img/home_swiper_item1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
const Home = () => {
    const icon = [
        {
            img: "a",
            title: "직잭뷰티",
        },
        {
            img: "a",
            title: "브랜드패션",
        },
        {
            img: "a",
            title: "상의",
        },
        {
            img: "a",
            title: "원피스",
        },
    ];
    return (
        <div className="home-container">
            <div className="home-wrapper">
                <div className="home-swipers">
                    <Swiper
                        className="home-swipers-banner"
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 1000 }} // 추가
                        loop={true} // 슬라이드 반복 여부
                    >
                        <SwiperSlide>
                            <img src={item1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={item1} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* ///섹션1 */}
                <div className="iconBox">
                    <div className="icon-link">
                        <a href="">
                            <div className="icon">
                                <img src="../public/img/icon_1.png" alt="" />
                            </div>
                            <div className="icon_text">카테고리</div>
                        </a>
                    </div>
                    <div className="side"></div>
                    {icon.map((v, i) => {
                        return (
                            <div key={i} className="icon-link">
                                <a href="">
                                    <div className="icon">
                                        <img
                                            src="../public/img/icon_1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="icon_text">{v.title}</div>
                                </a>
                            </div>
                        );
                    })}
                </div>
                {/* 섹션2 */}
                <div className="sec2">
                    <h4>첫 구매시 990원</h4>
                    <p>
                        2만원 이상 상품과 함께 주문시 990원에 구매할 수 있어요.
                    </p>
                    <ul className="main_list">
                        <li className="main_1">
                            <div className="main_1_img">
                                <picture>
                                    <img
                                        src="../public/img/main-1.jpg"
                                        alt=""
                                    />
                                </picture>
                                <img
                                    className="zigzin"
                                    src="../public/img/zigzin.png"
                                    alt=""
                                />
                                <button className="hart">
                                    <img
                                        className="hartImg"
                                        src="../public/img/hart.png"
                                        alt=""
                                    />
                                </button>
                            </div>
                            <div className="text-box">
                                <div>[레이지두낫띵]블랙 래빗 키링</div>
                                <div>
                                    <strong>첫구매가</strong>
                                </div>
                                <div>
                                    <span>93%</span>
                                    <span>990</span>
                                </div>
                                <div className="br">
                                    <img
                                        className="br2"
                                        src="../public/img/mumu.png"
                                        alt=""
                                    />
                                    <img src="../public/img/mumu2.png" alt="" />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
