import React from 'react';
import './home-style.css';
function HomeView(props) {
    return (
        <div>
            <div className="filter text-center row">
                <button type="button" className="btn btn-warning btnHover col-md" value="all" id="1" onClick={props.getValue}>all</button>
                <button type="button" className="btn btn-danger btnHover col-md" value="action" id="28" onClick={props.getValue}>action</button>
                <button type="button" className="btn btn-drama btnHover col-md" value="drama" id="18" onClick={props.getValue}>drama</button>
                <button type="button" className="btn btn-comedy btnHover col-md" value="comedy" id="35" onClick={props.getValue}>comedy</button>
                <button type="button" className="btn btn-info btnHover col-md" value="fantasy" id="14" onClick={props.getValue}>fantasy</button>
                <button type="button" className="btn btn-dark btnHover col-md" value="horror" id="27" onClick={props.getValue}>horror</button>
            </div>

            <div className="filter-tag">
                <p id="value"> ALL </p>
            </div>
        </div>
        
    );
}
export default HomeView