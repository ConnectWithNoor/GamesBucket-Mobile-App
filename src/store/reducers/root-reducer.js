import { combineReducers } from 'redux';

import bookmarksReducer from './bookmark-slice';

const rootReducer = combineReducers({
  bookmarks: bookmarksReducer,
});

export default rootReducer;
