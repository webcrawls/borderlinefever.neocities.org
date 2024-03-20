<script lang="ts">
    import PageMain from "$lib/page-sections/PageMain.svelte";
    import {writable, type Writable} from "svelte/store";
    import {setContext} from "svelte";
    import {page} from "$app/stores";
    import BackgroundVideo from "$lib/page-parts/BackgroundVideo.svelte";
    import PageTeam from "$lib/page-sections/PageTeam.svelte";
    import PageSocials from "$lib/page-sections/PageSocials.svelte";

    const hasAnchor: boolean = $page.url.hash !== ""
    const ready: Writable<boolean> = writable(hasAnchor)
    const loadingProgress: Writable<number> = writable(0.0)
    const playing: Writable<boolean> = writable(false)

    setContext("playing", playing)
    setContext("ready", ready)
    setContext("loadingProgress", loadingProgress)
</script>

<!--<main>-->
<!--    <PageMain/>-->
<!--    {#if $ready}-->
<!--        <div class="loaded-content">-->
<!--            <blockquote id="logline"><b>Two brothers decide to explore an old warehouse out of curiosity of what lies inside.</b>-->
<!--                They venture through a hole in the floor into the basement where they find themselves in over their-->
<!--                heads in a surreal environment, with familiar faces lurking-->
<!--            </blockquote>-->
<!--&lt;!&ndash;            <PageTeam/>&ndash;&gt;-->
<!--            <PageSocials/>-->
<!--            <p style="opacity: 0.7; font-style: italic">made with 💓 by <a-->
<!--                    href="https://webcrawls.live">webcrawls</a></p>-->
<!--        </div>-->
<!--    {/if}-->
<!--</main>-->

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loaded-content {
        max-width: 120ch;
        width: 100%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
    }

    #logline {
        font-size: 1.25rem;
        font-style: italic;
        padding-left: 2rem;
        border-left: 4px solid darkgray;
    }

    :global(body) {
        background-color: black;
    }
</style>