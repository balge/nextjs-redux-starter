import Immutable from 'immutable'
import * as ActionType from 'actions/repos'

export const initialState = Immutable.fromJS({
  isLoading: false,
  items: [],
  totalCount: 0,
  lang: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_TOP_REPOS:
      console.log('[REDUCER]: sending', action)
      return state.set('isLoading', true)

    case ActionType.GET_TOP_REPOS_SUCCESS:
      console.log('[REDUCER]: success', action)
      return state.merge(
        Object.assign({}, action.payload, {
          isLoading: false,
          lang: action.lang
        })
      )

    default:
      return state
  }
}
