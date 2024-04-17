import { get, writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';
import { prefersReducedMotion } from '$lib/stores/media';

export const makeFlicker = (flickerTime: 500) => {

	const flickering = writable(false)

	const flicker = (navigation: import('@sveltejs/kit').OnNavigate): void => {
		if (!browser) return;
		console.log({navigation})
		// if (!navigation.from || !navigation.to) return;
		// if (navigation.from.url.pathname === '/' || navigation.to.url.pathname === '/') return;
		console.log("test1")
		if (get(prefersReducedMotion)) return;
		console.log("test2")

		flickering.set(true);

		setTimeout(() => {
			flickering.set(false);
		}, flickerTime);
	}

	return { flicker, isFlickering: flickering }
}