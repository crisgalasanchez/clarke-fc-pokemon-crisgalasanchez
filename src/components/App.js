import React, { Component } from 'react';
import Pokedex from './Pokedex';


class App extends Component{
	constructor(props){
		super(props);

		this.cardChange = this.cardChange.bind(this);
		this.paintPokemon = this.paintPokemon.bind(this);

		this.state = {
	    pokemons: [],
			pokemonsFiltered:[],
			filtered: false
		}
	}

	componentDidMount() {
		let pokemonsList = [];
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
			.then(response => response.json())
			.then(json => {
				this.setState({
						pokemons: json.results
				});
			});
	}

	paintPokemon(pokemonsToShow) {
		return (
			<ul className="listNames">{
				pokemonsToShow.map(
					pokemon => <li className="type--name">
						<Pokedex name={pokemon.name}
					 						url={pokemon.url}/>
						</li>
					)
			}
			</ul>);
 	}

 	cardChange(event){
	 	this.state.pokemonsFiltered = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()));
		this.setState({
      filtered : true
    });
 	}

	render(){
		let pokemonsToShow= this.state.pokemons;
		if(this.state.filtered){
			pokemonsToShow = this.state.pokemonsFiltered;
		}

		return(
			<div className='app'>
				<h1 className='title' >Pokemon</h1>
				<div className='box'>
					<input placeholder= "Filtra pokemon por nombre" className='inbox' type="text"
				 	onChange={this.cardChange} />
				</div>
				{this.paintPokemon(pokemonsToShow)}
			</div>
		)
	}
}

export default App;
