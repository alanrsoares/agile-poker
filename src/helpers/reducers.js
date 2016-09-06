export const mergePayload = (state, { payload }) => ({
	...state,
	...payload
});
