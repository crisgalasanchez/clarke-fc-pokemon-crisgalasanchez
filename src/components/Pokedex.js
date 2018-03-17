import React from 'react';
import Pokecard from './Pokecard';

class Pokedex extends React.Component{
  constructor(props){
		super(props);

    this.cardChange = this.cardChange.bind(this);
		this.paintPokemon = this.paintPokemon.bind(this);

		this.state = {
			pokemonsFiltered:[],
			filtered: false
		}
	}

	paintPokemon(pokemonsToShow) {
		return (
			<ul className="listNames">{
				pokemonsToShow.map(
					pokemon => <li className="type--name">
												<Pokecard name={pokemon.name}
					 												url={pokemon.url}/>
										</li>
					)
			}
			</ul>);
 	}

 	cardChange(event){
	 	let filteredPokemons = this.props.list.filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()));
		this.setState({
			filtered : true,
			pokemonsFiltered: filteredPokemons
    });
 	}

  render(){
    let pokemonsToShow = [];
    if( this.props.list != undefined ){
      pokemonsToShow= this.props.list;
    }
		if(this.state.filtered){
			pokemonsToShow = this.state.pokemonsFiltered;
		}

		return(
      <div>
        <div>
          <div className='box'>
            <input placeholder= "Filtra pokemon por nombre" className='inbox' type="text"
            onChange={this.cardChange} />
          </div>
        </div>
        { this.paintPokemon(pokemonsToShow) }
      </div>
		)
	}
}
export default Pokedex;
