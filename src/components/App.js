import React, { Component } from 'react';
import Pokedex from './Pokedex';
import About from './About';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
	constructor(props){
		super(props);

		this.state = {
	    pokemons: []
		}
	}

	componentWillMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
			.then(response => response.json())
			.then(json => {
				this.setState({
						pokemons: json.results
				});
			});
	}

	handler() {
		this.setState({
		   messageShown: true
		});
	}

	render(){
		return(
			<div className='app'>
				<h1 className='title' >Pokemon</h1>
				<Switch>
					<Route exact path='/' render={ () => <Pokedex list={this.state.pokemons}/> }/>
					<Route path='/about/' component={ About } />
				</Switch>
			</div>
		)
	}
}

export default App;
