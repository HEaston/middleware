// it has been exported from the action, so now we can import it here
import { FETCH_WEATHER } from '../actions/index';

// first argument always state, second always action
export default function(state = [], action) {
  // console.log('Action received', action);

  // set up switch statement to handle only the fetchweather action type
  switch (action.type) {
    case FETCH_WEATHER:
      // don't try to manipulate state here
      // create an entirely new array instead
      return [ action.payload.data, ...state ]; // returns [city, city, city]
  }

  return state;
}