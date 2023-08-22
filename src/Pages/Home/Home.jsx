import './Home.scss';
import 'swiper/scss';
import { useState, useEffect, Fragment, useRef } from 'react';
import swiperItem1 from '/img/Home/home_swiper_item1.png';
import mainImg from '/img/main-1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import UICard from '../../Components/UICard/UICard';
import store from '/js/store.js';
import constants from '/js/constants';

const Home = () => {
	const [homeData, setHomeData] = useState({});
	const [isTouch, setIsTouch] = useState(false);
	const [moveX, setMoveX] = useState(0);
	const containerRef = useRef(null);
	const itemRef = useRef(null);

	const getSwiperImg = async () => {
		try {
			const res = await store.post({
				cmd: 'getImg',
			});

			if (res.msg === 'ok') setHomeData(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getSwiperImg();
	}, []);

	useEffect(() => {
		console.log(homeData);
	}, [homeData]);

	useEffect(() => {
		if (moveX >= 0 && !isTouch) setMoveX(0);
		if (moveX <= containerRef.current.offsetWidth - itemRef.current.offsetWidth && !isTouch)
			setMoveX(containerRef.current.offsetWidth - itemRef.current.offsetWidth);
	}, [isTouch]);

	const item = [
		{
			img: mainImg,
			isPick: false,
			title: '[레이지두낫띵] 블랙 래빗 키링',
			price: '990원',
		},
		{
			img: mainImg,
			isPick: false,
			title: '아이템2',
			price: '50000',
		},
		{
			img: mainImg,
			isPick: false,
			title: '아이템3',
			price: '50000',
		},
		{
			img: mainImg,
			isPick: false,
			title: '아이템4',
			price: '50000',
		},
		{
			img: mainImg,
			isPick: false,
			title: '아이템5',
			price: '50000',
		},
	];

	return (
		<div className='home-container'>
			<div className='home-wrapper'>
				<div className='home-swipers'>
					<Swiper
						className='home-swipers-banner'
						modules={[Autoplay, Pagination]}
						autoplay={{ delay: 1000 }} // 추가
						loop={true} // 슬라이드 반복 여부
					>
						<SwiperSlide>
							<img src={swiperItem1} />
						</SwiperSlide>
					</Swiper>
				</div>

				{/* categories */}
				{homeData['Categories']?.length > 0 && (
					<div className='home-categories-wrapper'>
						{homeData['Categories'].map(v => {
							return (
								<div key={v.data} className='flex-column-center home-categories'>
									<div className='home-categories-img'>
										<img src={`${constants.apiUrl}${v.data}`} />
									</div>
									<div className='home-categories-text'>{v.title}</div>
								</div>
							);
						})}
					</div>
				)}

				{/* firstBuy */}
				<div className='home-firstBuy-wrapper'>
					<h4>첫 구매시 990원</h4>
					<p>2만원 이상 상품과 함께 주문시 990원에 구매할 수 있어요.</p>
					<div
						ref={containerRef}
						className='home-firstBuy-items'
						onMouseUp={() => setIsTouch(false)}
						onMouseDown={() => setIsTouch(true)}
						onMouseMove={
							isTouch
								? e => {
										if (e.movementX >= 0) setMoveX(moveX + e.movementX);
										if (e.movementX <= 0) setMoveX(moveX + e.movementX);
								  }
								: null
						}
						onMouseLeave={() => setIsTouch(false)}>
						<div
							ref={itemRef}
							style={{
								transform: `translateX(${moveX}px)`,
								transition: !isTouch ? 'transform 0.3s' : '',
							}}>
							{item.map(v => {
								return (
									<div>
										<UICard key={v.title} imgSrc={v.img} title={v.title} price={v.price} isPick={v.isPick} />;
									</div>
								);
							})}
						</div>
					</div>

					<div className='flex-center home-firstBuy-btn'>첫구매 혜택 전체보기</div>
				</div>

				{/* moreItem */}
				{/* 그리드 속성 이용하여 화면에 뿌리기 */}
				<div className='home-moreItem-wrapper'>
					{/* {Array.from({ length: 10 }, (_, i) => {
                        return (
                            <UICard
                                key={v.title}
                                imgSrc={v.img}
                                title={v.title}
                                price={v.price}
                                isPick={v.isPick}
                            />
                        );
                    })} */}
					{item.map(v => {
						return <UICard key={v.title} imgSrc={v.img} title={v.title} price={v.price} isPick={v.isPick} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Home;
