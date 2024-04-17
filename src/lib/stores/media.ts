import { browser } from '$app/environment';
import { readable, type Readable, writable, type Writable } from 'svelte/store';

const makeMediaQueryStore = (query: string, value: boolean = false): Readable<boolean> => {
	if (!browser) return readable(value);

	const mediaQuery = window.matchMedia(query)
	const store: Writable<boolean> = writable(mediaQuery.matches)
	mediaQuery.addEventListener("change", (changed) => store.set(changed))

	return store
}

const prefersReducedMotion= makeMediaQueryStore('(prefers-reduced-motion: reduce)')

export {
	makeMediaQueryStore,
	prefersReducedMotion
}