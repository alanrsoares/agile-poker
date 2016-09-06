export const mergePayload = (state, { payload }) => ({
	...state,
	...payload
})

export const getPayload = (state, { payload }) => payload
