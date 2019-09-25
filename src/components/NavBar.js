import React from 'react';
import NotFound from './NotFound';
import BookList from './BookList';
import BookForm from './bookForm';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

const NavBar = () => {
    return (
        <Router>
            <nav style = {styles.navBarStyle} >
                <div className= "nav-wrapper" >
                    <div className="nav-content">
                        <ul>
                            <li className="tab">
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className="tab">
                                <Link to="/about">A propos</Link>
                            </li>
                            <li className="tab">
                                <Link to="/account">Mon compte</Link>
                            </li>
                            <li className="tab right">
                                <Link to="/add">Ajouter un livre</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
            <Switch>
                <Route exact path="/" component={BookList}></Route>
                <Route path="/add" component={BookForm}></Route>
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    )
}

const styles = {
    navBarStyle: {
        color: 'white',
        backgroundColor: '#004280',
    },
}

export default NavBar;