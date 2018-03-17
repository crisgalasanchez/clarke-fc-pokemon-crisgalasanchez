import React from 'react';
import icon from '../images/left-arrow.png';

class About extends React.Component{
  constructor(props){
		super(props);

    this.paintAbilities= this.paintAbilities.bind(this);

		this.state = {
		}
	}

  paintAbilities(abilities) {
		return (
			<ul className="listabilities">Listado de habilidades:{
				abilities.map(
					ability => <li className="ability"> {ability.ability.name}
						</li>
					)
			}
			</ul>);
 	}
  render(){
    let _id = "";
    let _info = "";
    if(this.props.location.query != undefined){
      _id = this.props.location.query._id;
      _info = this.props.location.query._info;
    }
    let weight = "";
    let height = "";
    let abilities = [];
    let backImage = "";
    let frontImage = "";
    let front_shiny = "";
    if(_info !== undefined && _info !== ""){
      weight = _info.info.weight;
      height = _info.info.height;
      abilities = _info.info.abilities;
      backImage = _info.info.sprites.back_default;
      frontImage = _info.info.sprites.front_default;
      front_shiny = _info.info.sprites.front_shiny;
		}

		return(
      <div>
        <div className="icon">
  					<a href="">
  						<img src={icon} className="back--button" alt="icon--back" />
  					</a>
  				</div>
        <div className="card card--details">
          <div className="image--box">
            <img className="image" src={ backImage } alt=""/>
            <img className="image" src={ frontImage } alt=""/>
            <img className="image" src={ front_shiny } alt=""/>

          </div>
          <div className="info">
            <h3 className="weight">Peso: { weight }</h3>
            <h3 className="height">Altura: { height }</h3>
            {this.paintAbilities(abilities)}
          </div>

        </div>
      </div>
		)
	}
}
export default About;
