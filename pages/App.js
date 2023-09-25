import React, { useState } from 'react'
import Menu from '../component/Menu'
import Categories from '../component/Categories'
import items from '../src/data'
import styles from '../styles/Home.module.css'
// dynamically calculate unqiue values here
const categories = ['all',...new Set(items.map(item => item['category']))]

function App() {
	const [menuItems, setMenuItems] = useState(items)

	const filterItems = (category) => {
		if (category === 'all') {
			setMenuItems(items)
		} else {
			setMenuItems(items.filter((item) => item.category === category))
		}
	}

	return (
		<main>
			<section className={styles.menuSection}>
				<div className={styles.title}>
					<h2>our menu</h2>
					<div className={styles.underline}></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	)
}

export default App
