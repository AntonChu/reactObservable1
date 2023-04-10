import {
  CHANGE_SEARCH_FIELD,
  SEARCH_SKILLS_FAILURE,
  SEARCH_SKILLS_REQUEST,
  SEARCH_SKILLS_SUCCESS,
} from "../actions/actionTypes";

const initialState = { items: [], loading: false, error: null, search: "" };

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SKILLS_REQUEST:
      console.log('SEARCH_SKILLS_REQUEST')
      return { ...state, loading: true, error: null };
    case SEARCH_SKILLS_FAILURE:
        console.log('SEARCH_SKILLS_FAILURE')
      const { error } = action.payload;
      return { ...state, loading: false, error };
    case SEARCH_SKILLS_SUCCESS:
      const { items } = action.payload;
      console.log({ ...state, items, loading: false, error: null })
      return { ...state, items, loading: false, error: null };
    case CHANGE_SEARCH_FIELD:
        console.log('CHANGE_SEARCH_FIELD')
      const { search } = action.payload;
      return { ...state, search };
    default:
      return state;
  }
}
