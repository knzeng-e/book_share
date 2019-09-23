import React from 'react';

const Book = ({title, author, picture, description}) => {
  return (
    <div className="hoverable">
      <div className="card">
        <div className="card-image responsive-img waves-effect waves-block waves-light">
          <img className="activator bookPicture" src={picture} alt={title}/>
          <button title="Acheter" className="btn left" style = {styles.buttonStyle}><i className="material-icons">add_shopping_cart</i></button>
          <button title="Emprunter" className="btn right" style = {styles.buttonStyle}><i className="tiny material-icons">restore</i></button>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-2">{title}<i className="material-icons right">close</i></span>
          <p>{description}</p>
          <p><button title="Acheter" className="btn left" style = {styles.buttonStyle}><i class="material-icons">add_shopping_cart</i></button>
          <button title="Emprunter" className="btn right" style = {styles.buttonStyle}><i class="large material-icons">restore</i></button></p>
        </div>
      </div>
    </div> 
  )
}

const styles = {
  bookStyle: {
    backgroundColor: '#004280',
  },
  buttonStyle: {
      backgroundColor: '#004280',
  }
}

export default Book;