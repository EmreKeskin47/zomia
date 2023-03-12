import {
  FETCH_CAROUSEL_CONTENT,
  ADD_TO_CAROUSEL,
  DELETE_FROM_CAROUSEL,
  UPDATE_CAROUSEL_ORDER,
} from "../actions/carousel-actions";

const initialState = {
  posts: [],
};

export default (state = Object.assign({}, initialState), action) => {
  switch (action.type) {
    case FETCH_CAROUSEL_CONTENT:
      state.posts = action.payload;
      return state;
    case DELETE_FROM_CAROUSEL:
      state.posts.filter((item) => item.id === action.payload);
      return state;
    case ADD_TO_CAROUSEL:
      state.posts.push(action.payload);
      console.log(state);
    case UPDATE_CAROUSEL_ORDER:
      //   const index = state.posts.findIndex((post) => post.id === post.id);
      //   state.posts[index] = action.payload;
      return state;
  }
  return state;
};
