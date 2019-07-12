import React from 'react';
import './StarWars.scss';

class Char extends React.Component {
  constructor(props) {
    super(props);
    this.info = props.info;
    console.log(this.info.name)
    this.state = {
      homeworld: ''
    }
  }

  componentDidMount() {
    this.getPlanet(this.info.homeworld);
  }

  getPlanet(URL) {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data.name });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <div className='char'>
        <h2>{this.info.name}</h2>
        <ul>
          <li>Homeworld: <span class='value'>{this.state.homeworld}</span></li>
          <li>Birth Year: <span class='value'>{this.info.birth_year}cm</span></li>
          <li>Height: <span class='value'>{this.info.height}cm</span></li>
          <li>Weight: <span class='value'>{this.info.mass}kg</span></li>
        </ul>
        Appears in {this.info.films.length} films
      </div>
    )
  }
}

export default Char;