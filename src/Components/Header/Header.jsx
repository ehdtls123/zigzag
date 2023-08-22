import React from 'react';
import './Header.scss';
import logo from '/img/logo.png';
import cart from '/img/cart_icon.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='header-container'>
			<div className='header-wrapper'>
				<img className='header-logo' src={logo} />
				<input className='header-search' type='text' placeholder='검색어를 입력하세요' />
				<img className='header-cart' onClick={() => navigate('/Login')} src={cart} />
			</div>
		</div>
	);
};

export default Header;
