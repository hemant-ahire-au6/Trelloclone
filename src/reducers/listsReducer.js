import { CONSTANTS } from "../action";

let listID = 3;
let cardID = 3;

const initialState = [
  {
    title: "ToDo",
    id: 0,
    cards: [
      {
        id: 0,
        text: "ToDo Task",
      },
      {
        id: 1,
        text: "ToDo Task two",
      },
    ],
  },
  {
    title: "InProgress",
    id: 1,
    cards: [
      {
        id: 0,
        text: "InProgress Task one",
      },
      {
        id: 1,
        text: "InProgress Task two",
      },
      {
        id: 2,
        text: "InProgress Task three",
      },
    ],
  },
  {
    title: "Completed",
    id: 2,
    cards: [
      {
        id: 0,
        text: "Completed Task one",
      },
      {
        id: 1,
        text: "Completed Task two",
      },
      {
        id: 2,
        text: "Completed Task three",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID,
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID,
      };
      cardID += 1;

      console.log("action received", action);

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
