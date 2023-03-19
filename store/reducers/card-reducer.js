import {
  // FETCH_CARD_CONTENT,
  ADD_TO_CARD,
  // DELETE_FROM_CARD,
  UPDATE_CARD_ORDER,
  FETCH_CARD_ORDER,
} from "../actions/card-actions";

const initialState = {
  cards: [],
  order: [],
};

export default (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    // case FETCH_CARD_CONTENT:
    //   state.posts = action.payload;
    //   return state;
    // case DELETE_FROM_CARD:
    //   return {
    //     ...state,
    //     posts: [...state.posts.filter((item) => item.id !== action.payload)],
    //   };

    case ADD_TO_CARD:
      return {
        ...state,
        posts: [...state.cards, action.payload],
      };

    case UPDATE_CARD_ORDER:
      return { ...state, order: action.payload.items };

    case FETCH_CARD_ORDER:
      //   const { posts } = state;
      const order = [...action.payload.order];
      //sort posts according to saved order
      //   posts.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
      console.log(order);
      return { ...state, order: order };
  }
  return state;
};
