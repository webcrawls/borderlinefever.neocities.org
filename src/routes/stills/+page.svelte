<script lang="ts">
    import TVWrapperViewer from "$lib/TVWrapperViewer.svelte";
    import stills from '$lib/data/stills.json'
    import {page} from "$app/stores";
</script>

<TVWrapperViewer entries="{stills.stills}"/>
