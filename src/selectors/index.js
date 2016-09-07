import * as authSelectors from '../reducers/auth'

export const isUserLoggedIn = state => authSelectors.isUserLoggedIn(state)
