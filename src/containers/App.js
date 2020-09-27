import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
// import {robots} from './robots.js'
import './App.css'



class App extends Component {
	constructor (){
		super()
		this.state={
			robots: [],
			searchfield:''


		}
		// console.log("constructor")
	}


componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => {
		return response.json();
	})
	.then(users => {
		this.setState({robots: users } )
	})


	// console.log('componentDidMount')
}
onSearchChange = (event) => {

	this.setState({searchfield: event.target.value})


}
	render(){
const filteredrobot=this.state.robots.filter( robot =>{
	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
})

if (this.state.robots.length === 0) {
	return <h1> loading</h1>
}else{


// console.log(filteredrobot)
// console.log('render')


		return (
			<div className='tc'>
			<h1 className='f1'>RobotFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<Scroll>
			<ErrorBoundary>
			  <CardList robots={filteredrobot}/>
			  </ErrorBoundary>
			 </Scroll>

			  </div>
			);

}
}

}

export default App;