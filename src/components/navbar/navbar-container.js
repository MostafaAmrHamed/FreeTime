import React, {Component} from 'react';

import NavbarView from './navbar-view';

class Navbar extends Component {
    state = {
        altLogo: "Logo"
    }
    
    render(){
        return(
            <div>
                <NavbarView altLogo = {this.state.altLogo}/>
            </div>
        );
    }
}

export default Navbar