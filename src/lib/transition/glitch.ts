import { writable, type Writable } from 'svelte/store';

const makeGlitch = (
	images: string[],
	initial: number
) => {
	const image: Writable<number> = writable(images[0])

	const glitch = (navigation: import('@sveltejs/kit').OnNavigate): Promise<void> => {
		const tick = () => {}
	}

	return {
		glitch,
		image
	}
}

export {
	makeGlitch
}