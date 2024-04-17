<script lang="ts">
	import { page } from '$app/stores';
	import ImageViewer, { type Entry } from '$lib/image/ImageViewer.svelte';
	import stills from '$lib/data/stills.json';
	import TVFrame from '$lib/tv/TVFrame.svelte';
	import ImageControl from '$lib/image/ImageControl.svelte';

	const items: Entry[] = stills.stills.map((val, index) => ({
		name: "Still "+(index+1),
		image: val.image,
		meta: {
			// title: ,
			// description: val.fav_artist_desc ?? ''
		},
		id: (index+1).toString()
	}));

	let id: string = $page.params.member ?? ""
	$: id = $page.params.member ?? ""

	let index: number = id ? items.findIndex(item => item.id === id) : 0;
	$: index = id ? items.findIndex(item => item.id === id) : 0
</script>

<TVFrame>
	<ImageViewer item="{items[index]}"
							 baseTitle=""
							 metaTitle="" />
	<ImageControl {items}
								bind:index
								base="stills"
								slot="control" />
</TVFrame>
