import React from "react";
import "./detailPokemon.css"
import { connect } from "react-redux";
import { clearDetail, getDetailPokemon } from "../../redux/actions";
import Header from "../header/header"
import Type from "../type/type"


class DetailPokemon extends React.Component {

    componentDidMount() {
        this.props.getDetailPokemon(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearDetail()
    }
    
    

    render() {

        return (
            <div className="backgroundD">
                <Header/>
                <div className="detailPokemon" >
                    <div className="img">
                        <img src={this.props.pkmnDetail.image} alt={this.props.pkmnDetail.name}  />
                    </div>
                    <div className="pokemon">
                        <h1>{typeof this.props.pkmnDetail.name === 'string' ? this.props.pkmnDetail.name.replace(/^\w/, c => c.toUpperCase()) : this.props.pkmnDetail.name}</h1>
                        <h4>POKEMON ID {this.props.pkmnDetail.id}</h4>

                        <h3>Types: {this.props.pkmnDetail.types}</h3> 
                    </div>
                    <div className="data1">
                        <p>Life: {this.props.pkmnDetail.hp}</p>
                        <p>Attack: {this.props.pkmnDetail.attack}</p>
                        <p>Defense: {this.props.pkmnDetail.defense}</p>
                    </div>
                    <div className="data2">
                        <p>Speed: {this.props.pkmnDetail.speed}</p>
                        <p>Height: {this.props.pkmnDetail.height}</p>
                        <p>Weight: {this.props.pkmnDetail.weight}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export const mapDispatchToProps = { getDetailPokemon, clearDetail  }

export const mapStateToProps = state => {
    return {
        pkmnDetail: state.pokemonDetail
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailPokemon)

