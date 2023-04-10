import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { changeSearchEpic, searchSkillsEpic } from "../epics";
import skillsReducer from "../reducers/skills";

const reducer = combineReducers({ skills: skillsReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const epic = combineEpics(changeSearchEpic, searchSkillsEpic);
const epicMiddleware = createEpicMiddleware();
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);
export default store;
