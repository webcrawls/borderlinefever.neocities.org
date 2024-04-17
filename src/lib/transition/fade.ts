import { get, writable } from 'svelte/store';

export const makeFade = (
	duration: number,
	initialOpacity: number,
	endOpacity: number | {
		'*': number;
		[route: string]: number;
	}
) => {
	const transitioning = writable(false);
	const frameOpacity = writable(initialOpacity);

	const opacityTransition = (navigation: import('@sveltejs/kit').OnNavigate): Promise<void> => {
		// return if a transition is already in progress
		const isTransitioning = get(transitioning);
		if (isTransitioning) return Promise.resolve();

		// return if we're navigating between the same routes
		if (navigation.from.route.id === navigation.to.route.id) return Promise.resolve();

		// get current and future opacities, return if they're equal
		let currentOpacity = get(frameOpacity)
		const desiredOpacity = typeof endOpacity === "object" ? endOpacity[navigation.to.url.pathname] ?? endOpacity['*'] : endOpacity
		if (desiredOpacity === currentOpacity) return Promise.resolve();

		return new Promise((resolve) => {
			transitioning.set(true);

			const difference = Math.abs(desiredOpacity - currentOpacity);
			const step = difference / duration;
			const direction = Math.sign(desiredOpacity - currentOpacity);

			// console.log({desiredOpacity, currentOpacity})

			const tick = () => {
				currentOpacity += step * direction;
				frameOpacity.set(currentOpacity)
				console.log("fade tick", currentOpacity)

				if (
					(direction === 1.0 && currentOpacity >= desiredOpacity) ||
					(direction === -1.0 && currentOpacity < desiredOpacity)
				) {
					resolve();
					transitioning.set(false);
					return;
				}
				requestAnimationFrame(tick);
			};

			tick();
		});
	};

	return { fade: opacityTransition, opacity: frameOpacity, transitioning: transitioning };
};
