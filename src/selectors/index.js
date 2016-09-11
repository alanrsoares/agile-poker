import * as authSelectors from '../reducers/auth'

export const isAuthenticated = state => authSelectors.isAuthenticated(state.auth)
