import React from 'react'
import ReactDOM from 'react-dom'



class Shows extends React.Component{

	constructor(){
		super();
		this.state = {
			show: [
				// {
				// 	dateTime: '11/21 - 8PM',
				// 	location: 'Spider House - Austin, TX',
				// 	eventLink: 'https://www.facebook.com/events/193050148276673/'
				// },
				// {
				// 	dateTime: '11/23 - 8PM',
				// 	location: 'Kick Butt Coffee - Austin, TX',
				// 	eventLink: 'https://www.facebook.com/events/456923044834851/'
				// },
				// {
				// 	dateTime: '12/20 - 8PM',
				// 	location: 'Beerland - Austin, TX',
				// 	eventLink: 'https://www.facebook.com/events/328563361265283/'
				// },
				// {
				// 	dateTime: '01/22 - 7PM',
				// 	location: 'Come and Take It Live - Austin, TX',
				// 	eventLink: 'https://www.facebook.com/events/2420340787981683/'
				// },
				{
					dateTime: '03/01 - 7PM',
					location: 'Dirty Dog Bar - Austin, TX',
					eventLink: 'https://www.eventbrite.com/e/calling-all-captains-tickets-54146663127?aff=SleptIn'
				},
			]
		}
	}

	


	render(){

		//Map through each project, so that they all display dynamically
		var show = this.state.show.map(function(d) {
			return(
				//Individual key for each project being mapped
				<tr key={d.location}>
					<td>{d.dateTime}</td>
					<td><a href={d.eventLink} target="_blank">{d.location}</a></td>
				</tr>
			);
		}.bind(this));

		return (
				<div className="upcoming-shows">
					<h2>Upcoming Shows</h2>
					<table>
						<tbody>
							<tr>
								<th>Date/Time</th>
								<th>Location</th>
							</tr>
							{show}
						</tbody>
					</table>

				</div>
		)
	}


	
}



export default Shows;