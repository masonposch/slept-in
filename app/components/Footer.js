import React from 'react'
import { Link } from 'react-router'


class Footer extends React.Component {

	constructor(){
		super();

		this.state = {
			social: [
				{ platform: "Spotify", logo: "fab fa-spotify", url: "https://open.spotify.com/artist/0RWEUOlzufNRn494QvfBiL?si=aYtlsgReQO6yIvkhspwK-g" },
				{ platform: "Bandcamp", logo: "fab fa-bandcamp", url: "https://sleptin.bandcamp.com/releases" },
				{ platform: "Instagram", logo: "fab fa-instagram", url: "https://www.instagram.com/slept.in.tx/" },
				{ platform: "Twitter", logo: "fab fa-twitter", url: "https://www.twitter.com/sleptinband/" },
			]
		}
	}

	render() {

		var socialLinks = this.state.social.map(function(d){
			return(
				<a key={d.platform} href={d.url} target="_blank">
					<i className={d.logo} aria-hidden="true"></i>
				</a>
			);
		}.bind(this));

		return(

			<div className="footer">
				<div className="contactSocial">
					<div className="social">
						{socialLinks}
					</div>
				</div>
				<div className="copyright">
					<p>&copy; 2018 | <b>Slept In</b></p>
				</div>
			</div>

		)
	}

}


export default Footer