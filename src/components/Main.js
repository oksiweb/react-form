import React, { Component } from 'react';
import Form from './Form/Form'
import FilmsList from './Films/FilmsList'
import Image from './images/film-img.jpg'

class Main extends Component {
  constructor(props){
    super(props);

    this.state = {
      films: [
        {
          id: 0,
          name: 'Black Panther',
          description: 'After the events',
          rating: 7,
          img: Image
        },
        {
          id: 1,
          name: 'Dunkirk',
          description: 'text text text',
          rating: 8,
          img: Image
        },
        {
          id: 2,
          name: 'Kingsman',
          description: 'Kingsman: The Golden Circle',
          rating: 7,
          img: Image
        }
      ],
      selectedFilm: null
    };

    this.handleFilmClick = this.handleFilmClick.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.onFormCancel = this.onFormCancel.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleFilmClick(id){
    this.setState({
      selectedFilm: this.state.films[id]
    });
  }

  handleFormChange(e, property) {
    this.setState({
      selectedFilm: {
          ...this.state.selectedFilm,
        [property]: e.target.value
      }
    });
  }

  onFormCancel(e) {
    e.preventDefault();
    this.setState({
      selectedFilm: null
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.setState({
      films: [
          ...this.state.films.slice(0, this.state.selectedFilm.id),
          this.state.selectedFilm,
          ...this.state.films.slice(this.state.selectedFilm.id+1),
      ]
    });
    this.setState({
      selectedFilm: null
    });
  }

  handleImage(e){
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        selectedFilm: {
          ...this.state.selectedFilm,
          img: reader.result,
          file: file
        }
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    return (
        <div>
          <FilmsList films = {this.state.films}
                     selectedFilm={this.state.selectedFilm}
                     onClick = {this.handleFilmClick} />
          {this.state.selectedFilm  !== null && (
            <Form selectedFilm={this.state.selectedFilm}
                  onChange={this.handleFormChange}
                  onFormCancel={this.onFormCancel}
                  onFormSubmit={this.onFormSubmit}
                  handleImage={this.handleImage}
            />
          )}
        </div>
    );
  }
}

export default Main;