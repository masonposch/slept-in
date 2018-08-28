import React from 'react'
import ReactDOM from 'react-dom'



class Hero extends React.Component{

	constructor(){
		super();
		this.state = { 
			greeting: 'Noisy, melodic post-punk from Austin, TX',
			styleClass: "intro",
			scrollPosition: 0,
		}

		this.imageBlur = this.imageBlur.bind(this)
		this.componentDidMount = this.componentDidMount.bind(this)
	}

	imageBlur() {
		var top = window.pageYOffset/12; 
		this.setState({scrollPosition: top})
	}


	render(){

		setTimeout(() => {
			this.setState({ greeting: "Slept In", styleClass: "name" });
		}, 3000) 

		// console.log(this.state.scrollPosition)

		return (
				<div className="background-image" style={{backgroundPosition: `calc(50% - 0px) calc(50% + ${this.state.scrollPosition}%)`}}>
					<div className="background-text text-center">
						<h1 className={this.state.styleClass}>{this.state.greeting}</h1>
					</div>
					<a href="#contactUs">Contact us</a>
				</div>
		)
	}


	componentDidMount() {
	    window.addEventListener('scroll', this.imageBlur);
	}
}



export default Hero;