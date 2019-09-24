import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav style = {styles.navBarStyle} >
            <div className= "nav-wrapper" >
                <div className="nav-content">
                    <ul>
                        <li className="tab"><a href="#">Accueil</a></li>
                        <li className="tab"><a href="#">A propos</a></li>
                        <li className="tab"><a className="active" href="#">Mon compte</a></li>
                        <li className="tab right"><a href="#">Ajouter un livre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const styles = {
    navBarStyle: {
        color: 'white',
        backgroundColor: '#004280',
    },
}

export default NavBar;