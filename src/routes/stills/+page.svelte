<script lang="ts">
    import TVWrapperViewer from "$lib/TVWrapperViewer.svelte";
    import stills from '$lib/data/stills.json'
</script>

<TVWrapperViewer entries="{stills.stills}"
                 baseTitle=""
                 metaTitle=""/>
