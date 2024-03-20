<script lang="ts" context="module">
    export interface LoadingState {
        /**
         * The progress of the loading bar. 0.0 means no loading, 1.0 means fully loaded.
         * Impacts the rendering of page content.
         */
        progress: number,

        /**
         * A truthy variable determining whether the page is considered 'loaded'. This should switch to true when
         * <code>progress</code> is equal to <code>1.0</code>.
         *
         * This value should change automatically via a reactive statement.
         */
        loaded: boolean
    }
</script>

<script lang="ts">
    import BackgroundVideo from "$lib/page-parts/BackgroundVideo.svelte";
    import Logo from "$lib/page-parts/Logo.svelte";
    import {writable, type Writable} from "svelte/store";
    import {page} from "$app/stores";
    import TV from "$lib/page-parts/TV.svelte";
    import Navigation from "$lib/page-parts/Navigation.svelte";

    const hasHash = $page.url.hash !== '' || $page.url.pathname !== '/'

    const defaultLoaded = hasHash
    const defaultProgress = defaultLoaded ? 1.0 : 0.0

    const loading: Writable<LoadingState> = writable({progress: defaultProgress, loaded: defaultLoaded})
    $: $loading.loaded = $loading.progress >= 1.0

    const loadTick = () => {
        $loading.progress = $loading.progress + nextProgress()

        if ($loading.progress >= 1.0) {
            $loading.progress = 1.0
            setTimeout(() => $loading.loaded = true, 1000)
            return
        }

        setTimeout(() => requestAnimationFrame(loadTick), 1)
    }

    const nextProgress = (max = 0.025, min = 0.001) => Math.random() * (max - min) + min

    $: console.log($page.url)

    let collapseHeader: boolean = false
    $: collapseHeader = $page.url.pathname !== '/'
</script>

<BackgroundVideo playing="{$loading.loaded}"/>

<div class="layout" class:collapsed-header={collapseHeader}>
    <header class:loaded={$loading.loaded}
            class:collapsed={collapseHeader}>
        <Logo progress="{$loading.progress}"/>
        <TV on:click={() => loadTick()}/>
        <Navigation progress="{$loading.progress}"
                    loaded="{$loading.loaded}"/>
    </header>
    <main>
        <slot/>
    </main>
</div>

<style>
    .layout {
        width: 100svw;
        height: 100svh;

        display: grid;
        grid-template-rows: 1fr 0;
        transition: grid-template-rows 0.2s;
        overflow: hidden;

        padding: 1rem;
    }

    .layout.collapsed-header {
        grid-template-rows: 6rem 1fr;
    }

    header {
        /*height: 100svh;*/
        /*width: 100svw;*/
        height: 100%;
        width: 100%;
        max-width: 120ch;
        margin-inline: auto;
        gap: 1rem;

        display: grid;
        grid-template-rows: min-content minmax(30%, 1fr) min-content;
        transition: grid-template-rows 0.2s;
        overflow: hidden;
        justify-content: center;
    }

    header.collapsed {
        grid-template-rows: 0px 0px min-content;
    }

    :global(header > *) {
        justify-self: center;
    }

    :global(header > :nth-child(2)) {
        align-self: center;
    }

    main {
        width: 100%;
        height: 100%;
        max-width: 80ch;
        margin-inline: auto;
    }
</style>