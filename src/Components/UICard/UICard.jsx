import React from 'react';
import './UICard.scss';

const UICard = ({ imgSrc, title, price, isPick }) => {
	return (
		<div className='card-container' onMouseDown={e => e.preventDefault()}>
			<div className='card-wrapper'>
				<div className='card-img'>
					<img src={imgSrc} />
					{isPick && <div className='heart'>111</div>}
				</div>
				<div className='card-title'>{title}</div>
				<div className='card-price'>{price}</div>
			</div>
		</div>
	);
};

export default UICard;
