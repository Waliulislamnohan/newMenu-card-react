import '@testing-library/jest-dom'
import * as React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import App from '/home/damner/code/src/App'
import Categories from '/home/damner/code/src/Categories'


const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-1.jpeg',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-2.jpeg',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-3.jpeg',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-4.jpeg',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-5.jpeg',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-6.jpeg',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-7.jpeg',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-8.jpeg',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img:
			'https://raw.githubusercontent.com/john-smilga/react-projects/master/5-menu/setup/public/images/item-9.jpeg',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	}
]

describe("suite", () => {
test('test', async () => {
	const { container } = render(<App />)
	const btns = [...container.querySelectorAll('button.filter-btn')]
	expect(btns.find((item) => item.innerHTML.trim().toLowerCase() === 'all')).toBeTruthy()
})

test('test', async () => {
	const { container } = render(<App />)
	const btns = [...container.querySelectorAll('button.filter-btn')]
	expect(btns.find((item) => item.innerHTML.trim().toLowerCase() === 'breakfast')).toBeTruthy()
})

test('test', async () => {
	const { container } = render(<App />)
	const btns = [...container.querySelectorAll('button.filter-btn')]
	expect(btns.find((item) => item.innerHTML.trim().toLowerCase() === 'lunch')).toBeTruthy()
})

test('test', async () => {
	const { container } = render(<App />)
	const btns = [...container.querySelectorAll('button.filter-btn')]
	expect(btns.find((item) => item.innerHTML.trim().toLowerCase() === 'shakes')).toBeTruthy()
})

test('test', async () => {
	render(<App />)
	fireEvent.click(screen.queryByText(/breakfast/i))
	menu.forEach((item) => {
		const r = new RegExp(item.title, 'i')
		if (item.category === 'breakfast') {
			expect(screen.queryByText(r)).not.toBeNull()
		} else {
			expect(screen.queryByText(r)).toBeNull()
		}
	})
})
test('test', async () => {
	render(<App />)
	fireEvent.click(screen.queryByText(/shakes/i))
	menu.forEach((item) => {
		const r = new RegExp(item.title, 'i')
		if (item.category === 'shakes') {
			expect(screen.queryByText(r)).not.toBeNull()
		} else {
			expect(screen.queryByText(r)).toBeNull()
		}
	})
})
test('test', async () => {
	render(<App />)
	fireEvent.click(screen.queryByText(/lunch/i))
	menu.forEach((item) => {
		const r = new RegExp(item.title, 'i')
		if (item.category === 'lunch') {
			expect(screen.queryByText(r)).not.toBeNull()
		} else {
			expect(screen.queryByText(r)).toBeNull()
		}
	})
})

test('test', async () => {
	render(<App />)
	fireEvent.click(screen.queryByText(/lunch/i))
	menu.forEach((item) => {
		const r = new RegExp(item.title, 'i')
		if (item.category === 'lunch') {
			expect(screen.queryByText(r)).not.toBeNull()
		} else {
			expect(screen.queryByText(r)).toBeNull()
		}
	})

	fireEvent.click(screen.queryByText(/all/i))

	menu.forEach((item) => {
		const r = new RegExp(item.title, 'i')
		expect(screen.queryByText(r)).not.toBeNull()
	})
})

test('test', async () => {
	render(<Categories filterItems={() => null} categories={['TEST_NO_HARDCODE']} />)
	screen.getByText('TEST_NO_HARDCODE')
})
})