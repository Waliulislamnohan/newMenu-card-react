import React from 'react'
import styles from '../../styles/Home.module.css';
// accept props here
const Menu = (props) => {
	const items = props.items

	// create the UI according to instructions
	return (
		<div className={styles.sectionCenter }>
			{items.map((item) => {
				const { id, title, img, desc, price } = item
				return (
					<article className={styles.menu-item} key={id}>
						<img src={img} alt={title} className={styles.photo} />
						<div className={styles.itemInfo}>
							<header>
								<h4>{title}</h4>
								<h4 className={styles.price}>${price}</h4>
							</header>
							<p className={styles.itemText}>{desc}</p>
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default Menu
