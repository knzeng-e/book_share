import BookDescription from '../../components/BookDescription';
import BookPictures from '../../ressources/BookPictures';

const initialState = {
    myBookList: [
                {
                    'title': 'Africa unite',
                    'author': 'Amzat Boukari Yabara',
                    'picture': BookPictures().africa_unite,
                    'description': BookDescription.africa_unite,
                },
                {
                    'title': 'Nations negres et cultures',
                    'author': 'Cheik Anta Diop',
                    'picture': BookPictures().nationsNegres,
                    'description': BookDescription.nationNegres,
                },
                {
                    'title': 'La pensée africaine',
                    'author': 'Mbog Bassong',
                    'picture': BookPictures().penseeAfricaine,
                    'description': BookDescription.penseeAfricaine,

                },
    ]
}

const addBook = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_BOOK': 
                return {
                    ...state,
                    myBookList: [...state.myBookList, action.payload],
                }
        default:
            return state;
    }
}

export default addBook;