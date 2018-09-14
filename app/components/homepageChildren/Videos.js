import React from 'react'
import ReactDOM from 'react-dom'



class Videos extends React.Component{

	constructor(){
		super();
		this.state = {
			video: [
				{
					id: 'lNKd5Yn9si0',
				},
			]
		}
	}

	


	render(){

		//Map through each project, so that they all display dynamically
		var video = this.state.video.map(function(d) {
			return(
				//Individual key for each project being mapped
				<div className="video-wrapper">
					<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + d.id + "?rel=0"} frameBorder="0" allowFullScreen ></iframe>
				</div>
			);
		}.bind(this));

		return (
				<div className="videos">
					<h2>Videos</h2>
					{video}
				</div>
		)
	}


	
}



export default Videos;