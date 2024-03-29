<script lang="ts">
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import {page} from "$app/stores"

    let playing: boolean = false
    $: playing = $page.url.pathname !== '/'
</script>

<div id="app">
    <main>
        <img aria-hidden="true" src="/PATTERN-TV.png" class="tv-background"/>
        <nav class="tv-nav">
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/stills">Stills</a>
        </nav>
        <section>
            <BackgroundVideo {playing}/>
            <div class="content-wrapper">
                <slot/>
            </div>
        </section>
    </main>
</div>

<style>
    :global(#app) {
        width: 100svw;
        height: 100svh;
        /*height: 100%;*/
        overflow: hidden;
        position: absolute;
    }

    main {
        max-width: 160ch;
        padding: 1%;
        height: fit-content;
        max-height: 100svh;
        margin: auto;
        aspect-ratio: 1 / 1;
        position: relative;
    }

    section {
        position: absolute;
        top: 11%;
        left: 13%;
        width: 77%;
        height: 56%;
        overflow: hidden;
        padding: 2rem;
    }

    section .content-wrapper {
    }

    main .tv-nav {
        position: absolute;
        /*background-color: white;*/
        width: 52%;
        height: 7%;
        top: 87%;
        left: 25%;

        display: flex;
        justify-content: space-between;
        gap: 1rem;
        /*background-size: cover;*/
    }

    main .tv-nav a {
        color: white;
        font-family: "Daydream";
        background-image: url("/PATTERN-TV-buttons.png");
        background-size: cover;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    main .tv-nav a:hover {
        filter: invert(100%);
    }

    .tv-background {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
        z-index: 1;
    }
</style>