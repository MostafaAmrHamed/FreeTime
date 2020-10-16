import React, { Component } from 'react';
import axios from 'axios';
import HomeView from './home-view';
import Movies from './movie-item';
import Swal from 'sweetalert2'
import Logo from '../navbar/logo.png'

class Home extends Component {
  state = {
    movies: [],
    genres: [],
    moviesFilter:[],
    callingApiMovies: true,
    callingApigenres: true,
    altImage: "Card image cap",
    value: "ALL",
    test: [],
    isLoading: false
  }
  constructor() {
    super()
    const options = {
      url: 'https://api.themoviedb.org/3/list/1?api_key=dc793ed90ff7391d980cf3d7c9f27fef&language=en-US',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    const genresOptions = {
      url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=dc793ed90ff7391d980cf3d7c9f27fef&language=en-US',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };

    axios(genresOptions)
      .then((result) => {
        this.setState({
          genres: result.data,
          callingApigenres: false

        })
      }).catch((err) => {
        console.log(err);
      });

    axios(options)
      .then((result) => {
        this.setState({
          movies: result.data.items,
          callingApiMovies: false,
          test: result,
          isLoading: true
        })
        this.setState({ moviesFilter: this.state.movies });
      }).catch((err) => {
        console.log(err);
      });

    this.getValue = this.getValue.bind(this)
    this.overview = this.overview.bind(this)
  }

  getValue(event) {
    const id = parseInt(event.target.id)
    if (id === 1) {
      this.setState({ moviesFilter: this.state.movies });
    } else if ( id === 28) {
      this.setState({ moviesFilter: this.state.movies.filter( (movie) => movie.genre_ids.includes(id)) });
    }else if( id === 18){
      this.setState({ moviesFilter: this.state.movies.filter( (movie) => movie.genre_ids.includes(id)) });
    }else if( id === 35){
      this.setState({ moviesFilter: this.state.movies.filter( (movie) => movie.genre_ids.includes(id)) });
    }else if( id === 14){
      this.setState({ moviesFilter: this.state.movies.filter( (movie) => movie.genre_ids.includes(id)) });
    }else if( id === 27){
      this.setState({ moviesFilter: this.state.movies.filter( (movie) => movie.genre_ids.includes(id)) });
    }
    document.getElementById("value").innerHTML = event.target.value
  }

  overview(title) {
    Swal.fire({
      title: title,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  componentDidMount(){
    Swal.fire({
      title: `Attention!
      I hope you are here in your free time.`,
      imageUrl: `${Logo}`,
      imageWidth: 250,
      imageHeight: 100,
      imageAlt: 'Logo',
    })
  }  
  render() {
    const movieList = this.state.moviesFilter.map((item) => (
      <Movies 
      movies={item}
      key={item.id}
      callingApiMovies={this.state.callingApiMovies}
      altImage={this.altImage}
      imgSrc={item.poster_path}
      overview={()=>this.overview(item.overview)}
      isLoading= {this.state.isLoading}
      />
    ));
    
    return (
      <div>
        <HomeView getValue={this.getValue}/>
        <div className="container">
          <div className="row">
            {movieList}
          </div>
        </div>
      </div>
    );
  }
}

export default Home