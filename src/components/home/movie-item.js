import React from 'react'
import ReactLoading from 'react-loading';

function MovieItem(props) {

    if (!props.isLoading) {
        return  <ReactLoading type={"bubbles"} color={"white"} height={'20%'} width={'20%'} />
    } else {

        return (

            <div className="item text-center col-lg-4 col-md-6  col-sm-12 ">
                {
                    props.callingApiMovies === true ? <h1> Loading.... </h1> :
                        <div className="card" >
                            <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500" + props.imgSrc} alt={props.altImage}></img>
                            <div className="card-body">
                                <h5 className="card-title"> {props.movies.original_title} </h5>
                                <p className="card-text"> {`Released: ${props.movies.release_date}`} </p>
                                <p className="card-text rate"> {`Rate: ${props.movies.vote_average}`} </p>
                                <button onClick={props.overview} className="btn btn-primary overview">Overview</button>
                            </div>
                        </div>
                }
            </div>

        );
    }
}
export default MovieItem