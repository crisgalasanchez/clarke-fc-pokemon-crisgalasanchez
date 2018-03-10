import React from 'react';

class Pokedex extends React.Component{
  constructor(props){
		super(props);

    this.paintTypes= this.paintTypes.bind(this);

		this.state = {
		}
	}

  componentDidMount() {
		let url = this.props.url;
		fetch(url)
			.then(response => response.json())
			.then(json => {
				this.setState({
						pokemonInfo: json
				});
			});
	}

  paintTypes(types) {
		return (
			<ul className="listTypes">{
				types.map(
					type => <li>{type.type.name}
						</li>
					)
			}
			</ul>);
 	}

  render() {
    let info = this.state.pokemonInfo;
    let name = "";
    let id = "";
    let sprite = "";
    let types = [];
    if(info != undefined){
      name = info.name;
      id = info.id;
      sprite = info.sprites.front_default;
      types = info.types;
    }
    return (
        <div className="card">
          <div className="image--box">
            <img className="image" src={ sprite } alt=""/>
            <h2 className="id">{ id }</h2>
          </div>
          <div className="info">
            <h2 className="name">{ name }</h2>
            {this.paintTypes(types)}
          </div>
        </div>
    );
  }
}

export default Pokedex;
