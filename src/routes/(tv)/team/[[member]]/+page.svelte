<script lang="ts">
	import { page } from '$app/stores';
	import ImageViewer, { type Entry } from '$lib/image/ImageViewer.svelte';
	import crewData from '$lib/data/team.json';
	import TVFrame from '$lib/tv/TVFrame.svelte';
	import ImageControl from '$lib/image/ImageControl.svelte';

	const items: Entry[] = crewData.crew.map(val => ({
		name: val.name + ', ' + val.role,
		image: val.image,
		meta: {
			title: val.fav_artist,
			description: val.fav_artist_desc ?? ''
		},
		id: val.id
	}));

	let id: string = $page.params.member ?? ""
	$: id = $page.params.member ?? ""

	let index: number = id ? items.findIndex(item => item.id === id) : 0;
	$: index = id ? items.findIndex(item => item.id === id) : 0
</script>

<TVFrame>
	<ImageViewer item="{items[index]}"
							 baseTitle="🎬 Team, Role"
							 metaTitle="🎶❤️ Favourite Artist" />
	<ImageControl {items}
								bind:index
								base="team"
								slot="control" />
</TVFrame>
