import React from 'react'
import ReactDOM from 'react-dom'



class Music extends React.Component{

	constructor(){
		super();
		this.state = {
			album: [
				{
					name: 'Arousal of Drifting',
					image: '/assets/images/final-aod.jpg',
					spotify: 'https://open.spotify.com/artist/0RWEUOlzufNRn494QvfBiL?si=aYtlsgReQO6yIvkhspwK-g',
					bandcamp: 'https://sleptin.bandcamp.com/releases'
				},
			]
		}
	}

	


	render(){

		//Map through each project, so that they all display dynamically
		var album = this.state.album.map(function(d) {
			return(
				//Individual key for each project being mapped
				<div className="album-wrapper">
					<a href={d.bandcamp} target="_blank"><img src={d.image} alt={d.name} /><p>{d.name}</p></a>
					<a href={d.spotify} className="spotify-link" target="_blank">Listen on Spotify</a><br />
					<a href={d.bandcamp} className="bandcamp-link" target="_blank">Download</a>
				</div>
			);
		}.bind(this));

		return (
				<div className="music">
					<h2>Music</h2>
					{album}
				</div>
		)
	}


	
}



export default Music;