import React from 'react'
import ReactDOM from 'react-dom'
const Instafeed = require('instafeed.js');



class Photos extends React.Component{

	constructor(){
		super();
		this.state = {
		}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	


	render(){


		return (
				<div className="photos">
					<h2>Photos</h2>
					<div id="instafeed"></div>
				</div>
		)
	}


	componentDidMount() {
		var feed = new Instafeed({
	        get: 'user',
	        tagName: 'awesome',
	        clientId: 'd9c874c7d77f44c08436b810e7e90795',
	        userId: '6620316052',
	        accessToken: '6620316052.d9c874c.b26268b9065b4a97ae75baae9a437737',
	        template: '<div class="image"><a href="{{link}}" target="_blank"><img src="{{image}}" /></a></div>',
	    });
	    feed.run();
	}


	
}



export default Photos;
