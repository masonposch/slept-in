import React from 'react'
import ReactDOM from 'react-dom'

import Hero from './homepageChildren/Hero'
import Shows from './homepageChildren/Shows'
import Music from './homepageChildren/Music'
import Videos from './homepageChildren/Videos'
import Photos from './homepageChildren/Photos'
import Contact from './homepageChildren/Contact'
import Form from './homepageChildren/Form'

import Footer from './Footer'


class Home extends React.Component{

	render() {
		return (
			<div className="homePageRender">
				<Hero />
				
				<Music />
				<Videos />
				<Photos />
				<Contact />
				<Footer />
			</div>
		)
	}
}



export default Home;
