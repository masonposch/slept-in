import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import Shows from './homepageChildren/Shows'
import Form from './homepageChildren/Form'

import Footer from './Footer'


class Home extends React.Component{

	render() {
		return (
			<div className="homePageRender">
				<Hero />
				<Shows />
				<Footer />
			</div>
		)
	}
}



export default Home;