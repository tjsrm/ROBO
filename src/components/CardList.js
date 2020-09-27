import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
	// const CardArray=robots.map( (user,i) => {
	// 	return (
	// 		<Card id={robots[i].id} 
	// 		name={robots[i].name} 
	// 		email={robots[0].email} />
	// 		)
	// }
	// )

// if (true){
// 	throw new Error('NOOOOOOO')
// }

	return (
		<div>
		  {
		  // {CardArray}
		  robots.map( (user,i) => {
		  	return (
				<Card 
				key={i}
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} />
					)
				}
			)
		  }
	  	</div>
		);


}
export default CardList;