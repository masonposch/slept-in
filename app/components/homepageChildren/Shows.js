import React from 'react'
import ReactDOM from 'react-dom'



class Shows extends React.Component{

	constructor(){
		super();
		this.state = {
			show: [
				{
					dateTime: '11/21 - 8PM',
					location: 'Spider House - Austin, TX',
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
					<td>{d.location}</td>
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