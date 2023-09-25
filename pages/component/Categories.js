import React from 'react'
import styles from '../../styles/Home.module.css'
const Categories = (props) => {
	const { filterItems, categories } = props

	return (
		<div className={styles.btnContainer}>
        {categories.map(category => {
            return (<button className={styles.filterBtn} onClick={() => filterItems(category)}>
            {category}</button> )
        })}
		</div>
	)
}

export default Categories
