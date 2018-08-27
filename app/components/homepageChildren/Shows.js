import React from 'react'
import ReactDOM from 'react-dom'



class Shows extends React.Component{

	constructor(){
		super();
		this.state = {
			// show: {
			// 	date: ,
			// 	location:,
			// },
		}
	}

	


	render(){

		

		return (
				<div className="upcoming-shows">

					<table>
						<tr>
							<th>Date/Time</th>
							<th>Location</th>
						</tr>
						<tr>
							<td>9/6 - Midnight</td>
							<td>Dozen Street - Austin, TX</td>
						</tr>
					</table>

				</div>
		)
	}


	
}



export default Shows;