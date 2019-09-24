import { connect } from 'react-redux';
import React, { useState } from 'react';
import BookPictures from '../ressources/BookPictures';
import addBookAction from '../store/actions/addBook_action';

const BookForm = (props) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const handleFormChange = (e) => {
        e.preventDefault();
        switch(e.target.name){
            case 'title': setTitle(e.target.value);
                        console.log(title);
                    break;
            case 'author': setAuthor(e.target.value);
                    break;
            case 'description': setDescription(e.target.value);
                    break;
            default: console.log(e.target.name, e.target.value);
        }
    }

    const addBookHandler = (e) => {
        e.preventDefault();
        const picture = BookPictures().nationsNegres;
        let newBook = {title, author, picture, description};
        props.saveBook(newBook);
        console.log(newBook)
    }
    return(
        <div className="row">
            <form className="col s12" onSubmit={addBookHandler}>

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">local_library</i>
                        <input name="title" 
                               type="text" 
                               placeholder="Book title" 
                               onChange={handleFormChange} 
                               className="validate"
                               required
                        />
                        <label for="title">Titre</label>
                    </div>
                    <div className="input-field col s6">
                        <i className="material-icons prefix">person</i>
                        <input name="author" 
                               type="text" 
                               placeholder="Book Author" 
                               onChange={handleFormChange}
                               required
                        />
                        <label>Auteur</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m12">
                        <textarea className="materialize-textarea center" 
                                  name="description" type="textarea" 
                                  placeholder="Description" 
                                  onChange={handleFormChange}
                                  required>
                    </textarea>
                    </div>
                </div>

                <div className="row center">
                        <input type="submit" 
                                value="ADD A BOOK" 
                                className = "btn center" 
                                style={styles.buttonStyle}
                        />

                </div>

            </form>
        </div>
    )
}

const styles = {
 
  buttonStyle: {
      backgroundColor: '#004280',
  }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveBook: (bookToSave) => dispatch(addBookAction(bookToSave)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookForm);