import Book from './Book';
import {connect} from 'react-redux';
import React from 'react';
import BookForm from './bookForm';
import addBookAction from '../store/actions/addBook_action';

const BookList = (props) => {

    const {myList} = props;

    console.log('STATEBook ==>', myList);
    return(
        <div>
            <div className="row" id="mySpliter">
                    {
                        myList.map((book, index) => {
                        return (
                            <div className = "col m4">
                                <Book 
                                    key = {index} 
                                    title={book.title} 
                                    author={book.author} 
                                    picture = {book.picture}
                                    description = {book.description}/>
                            </div>)
                        })
                    }
            </div> 
       <div className="row">
            <BookForm />
        </div> 
        <div>
                <ul className="pagination pager center" id="spliter">
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    <li className="active"><a href="#!">1</a></li>
                    <li className="waves-effect"><a href="#!">2</a></li>
                    <li className="waves-effect"><a href="#!">3</a></li>
                    <li className="waves-effect"><a href="#!">4</a></li>
                    <li className="waves-effect"><a href="#!">5</a></li>
                    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
       </div>
    )
}


const mapStateToProps = (state) => {
    return {
        myList: state.Books.myBookList,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addBook: (newBook) => { dispatch(addBookAction(newBook)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);