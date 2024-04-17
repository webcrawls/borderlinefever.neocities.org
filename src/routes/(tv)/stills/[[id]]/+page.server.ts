import stills from '$lib/data/stills.json';

export const entries = () => {
	return stills.stills
		.map((value, index) => ({ id: `${index + 1}.jpg` }))
		.filter((value) => value.id !== undefined);
};
