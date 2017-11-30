import { SELECT_GROUP } from './group.actions';

export default function(state = '', action) {
  switch(action.type) {
    case SELECT_GROUP:
      return action.payload;
    default:
      return state;
  }
}
