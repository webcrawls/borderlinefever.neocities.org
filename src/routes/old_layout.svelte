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
    import {writable, type Writable} from "svelte/store";
    import {page} from "$app/stores";
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import Footer from "$lib/layout/Footer.svelte";
    import Header from "$lib/layout/Header.svelte";
    import {browser} from "$app/environment";
    import {onMount, setContext} from "svelte";

    const defaultLoaded = !($page.url.pathname === '/' || $page.url.hash !== '')
    const defaultProgress = defaultLoaded ? 1.0 : 0.0

    const loading: Writable<LoadingState> = writable({progress: defaultProgress, loaded: defaultLoaded})
    $: $loading.loaded = $loading.progress >= 1.0

    let compressed: boolean = false
    $: compressed = $loading.loaded && !($page.url.pathname === '/' || $page.url.hash !== '')


    const js = writable(false)
    setContext("js", js)

    const loadTick = () => {
        $loading.progress = $loading.progress + nextProgress()

        if ($loading.progress >= 1.0) {
            $loading.progress = 1.0
            setTimeout(() => $loading.loaded = true, 1000)
            return
        }

        setTimeout(() => requestAnimationFrame(loadTick), 1)
    }

    const nextProgress = (max = 0.01, min = 0.0001) => Math.random() * (max - min) + min

    onMount(() => {
        if (!browser) return;
        $js = true
    })
</script>

<div id="app" class:compressed={compressed}
              class:loaded={$loading.loaded}>
    <BackgroundVideo playing="{$loading.loaded}"/>

<!--    <Header progress="{$loading.progress}"-->
<!--            loaded="{compressed}"-->
<!--            on:interact={() => loadTick()}/>-->

    <main>
        <slot/>
    </main>

    <Footer/>
</div>

<style>
    /* Ensure body width/height is, at minimum, the size of the screen. */
    /* Use CSS grid to position rows. */
    :global(#app) {
        min-width: 100svw;
        height: 100svh;
        width: 100%;
        /*height: 100%;*/
        display: grid;
        grid-template-rows: 100svh min-content min-content;
        transition: height 0.3s, grid-template-rows 0.3s;
        overflow: hidden;
    }

    :global(#app.loaded) {
        overflow-y: scroll;
    }

    :global(#app.compressed) {
        grid-template-rows: min-content min-content min-content;
    }

    /* Apply a max-width and centered margin to non-header and non-video elements. */
    :global(#app > :not(header, video)) {
        max-width: 80ch;
        margin-inline: auto;
    }

    :global(main) {
        width: 100%;
        height: 100%;

        padding: 1rem;

        display: flex;
        flex-direction: column;
    }
</style>