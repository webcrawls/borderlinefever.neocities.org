export const makeWait = (delay: number) => {
	return {
		wait: () => new Promise((resolve) => setTimeout(() => resolve(), delay))
	};
};
