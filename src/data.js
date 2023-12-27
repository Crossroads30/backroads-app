import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
	{
		id: 1,
		href: '#home',
		text: 'home',
	},
	{
		id: 2,
		href: '#about',
		text: 'about',
	},
	{
		id: 3,
		href: '#services',
		text: 'services',
	},
	{
		id: 4,
		href: '#tours',
		text: 'tours',
	},
]
export const socialLinks = [
	{
		id: 1,
		href: 'https://www.twitter.com',
		icon: 'fab fa-facebook',
	},
	{
		id: 2,
		href: 'https://www.twitter.com',
		icon: 'fab fa-twitter',
	},
	{
		id: 3,
		href: 'https://www.twitter.com',
		icon: 'fab fa-squarespace',
	},
]
export const services = [
	{
		id: 1,
		title: 'Saving Money',
		icon: 'fas fa-wallet fa-fw',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 2,
		title: 'Endless Hiking',
		icon: 'fas fa-tree fa-fw',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
	{
		id: 3,
		title: 'Amazing Comfort',
		icon: 'fas fa-socks fa-fw',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
	},
]
export const tours = [
	{
		id: 1,
		image: tour1,
		tourDate: 'August 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'China',
		duration: 6,
		cost: 2100,
	},
	{
		id: 2,
		image: tour2,
		tourDate: 'October 1th, 2020',
		title: 'Best Of Java',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'indonesia',
		duration: 11,
		cost: 1400,
	},
	{
		id: 3,
		image: tour3,
		tourDate: 'September 15th, 2020',
		title: 'Explore Hong Kong',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'hong kong',
		duration: 8,
		cost: 5000,
	},
	{
		id: 4,
		image: tour4,
		tourDate: 'December 5th, 2019',
		title: 'Kenya Highlights',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'kenya',
		daysCount: 20,
		cost: 3300,
	},
	{
		id: 5,
		image: tour5,
		tourDate: 'July 22th, 2019',
		title: 'Africa Exploration',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'africa',
		daysCount: 21,
		cost: 6300,
	},
	{
		id: 6,
		image: tour6,
		tourDate: 'November 5th, 2019',
		title: 'India Travel',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
		location: 'india',
		daysCount: 13,
		cost: 2300,
	},
]
