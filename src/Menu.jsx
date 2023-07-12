import React from 'react'

// accept props here
const Menu = (props) => {
	const items = props.items

	// create the UI according to instructions
	return (
		<div className="section-center">
			{items.map((item) => {
				const { id, title, img, desc, price } = item
				return (
					<article className="menu-item" key={id}>
						<img src={img} alt={title} className="photo" />
						<div className="item-info">
							<header>
								<h4>{title}</h4>
								<h4 className="price">${price}</h4>
							</header>
							<p className="item-text">{desc}</p>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default Menu
