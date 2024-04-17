import team from '$lib/data/team.json';

export const entries = () => {
	return team.crew
		.map((value) => ({ member: value?.name ?? undefined }))
		.filter((value) => value.member !== undefined);
};
