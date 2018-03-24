import generateTitle from '../../utils/penguin-pop-culture-title-generator'

// Actions
export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'
export const TITLE_CHANGE = 'counter/TITLE_CHANGE'

// State
const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  title: generateTitle()
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }
    case TITLE_CHANGE:
      return {
        ...state,
        title: generateTitle()
      }

    default:
      return state
  }
}
