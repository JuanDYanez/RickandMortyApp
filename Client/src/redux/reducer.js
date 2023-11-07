import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";


const initialState = {
  myFavorites: [],
  allCharacters: []
}

const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => {
          return char.id !== Number(payload);
        }),
      };

    case FILTER:
      // eslint-disable-next-line no-case-declarations
      let filteredCharacters;
      if (payload === "All") {
        filteredCharacters = state.allCharacters
      } else {
        filteredCharacters = state.allCharacters.filter((char) => {
          return char.gender === payload;
        })
      }

      return {
        ...state,
        myFavorites: filteredCharacters,
      };

    case ORDER:
      // eslint-disable-next-line no-case-declarations
      let orderedCharacters;
      if (payload === "A") {
        orderedCharacters = state.allCharacters.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      }

      if (payload === "D") {
        orderedCharacters = state.allCharacters.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        });
      }

      return {
        ...state,
        myFavorites: orderedCharacters,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;