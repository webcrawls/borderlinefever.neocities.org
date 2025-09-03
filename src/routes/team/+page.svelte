<script lang="ts">
    import { run } from 'svelte/legacy';

    import TVWrapperViewer from "$lib/TVWrapperViewer.svelte";
    import crewData from '$lib/data/team.json'

    let entries: {
        name: string,
        image: string | undefined,
        meta: {
            title: string | undefined,
            description: string | undefined
        }
    }[] = $state(crewData.crew.map(val => ({
            name: val.name + ', ' + val.role,
            image: val.image,
            meta: {
                title: val.fav_artist,
                description: val.fav_artist_desc ?? ''
            }
        })))

    // run(() => {
    //     entries = crewData.crew.map(val => ({
    //         name: val.name + ', ' + val.role,
    //         image: val.image,
    //         meta: {
    //             title: val.fav_artist,
    //             description: val.fav_artist_desc ?? ''
    //         }
    //     }))
    // });
</script>

<TVWrapperViewer {entries}
                 baseTitle="🎬 Team, Role"
                 metaTitle="🎶❤️ Favourite Artist"/>
