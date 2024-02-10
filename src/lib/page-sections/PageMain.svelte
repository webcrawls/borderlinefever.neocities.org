<script lang="ts">
    import Loading from "$lib/page-parts/Loading.svelte";
    import {fade} from "svelte/transition";
    import {getContext} from "svelte";
    import type {Writable} from "svelte/store";

    const ready: Writable<boolean> = getContext("ready")

    let playing: boolean = false
    let loader: Loading = null
    let video: HTMLVideoElement = null
    let loaded: boolean = false

    const playVideo = () => {
        playing = true
        loader.start()
    }

    const handleDone = () => {
        loaded = true
        $ready = true
    }
</script>

<video bind:this={video} class="bg-video" class:playing class:not-playing={!playing} autoplay muted loop onloadstart="">
    <source src="/junkyard-effects.mp4" type="video/mp4"/>
</video>

<div class="page-group">
    <section class="section-left link-group">
        {#if loaded}
            <a transition:fade={{duration: 150}} href="#" class="link">VIEW THE FILM -></a>
            <a transition:fade={{duration: 150}} href="#team" class="link">MEET THE TEAM -></a>
        {/if}
    </section>
    <main>
        <header>
            <h1 class="title">INTERFERENCE PATTERN</h1>
            <p>* a borderline fever production *</p>
        </header>
        <section class="tv-section">
            <img class="tv" on:click={playVideo} style="cursor: pointer" src="/monitor.png"/>
            <Loading bind:this={loader} on:done={handleDone}/>
        </section>
        <section class="mobile-link-group">
            {#if loaded}
                <a transition:fade={{duration: 150}} href="#team" class="link">VIEW THE FILM</a>
                <a transition:fade={{duration: 150}} href="#" class="link">MEET THE TEAM</a>
                <a transition:fade={{duration: 150}} href="#" class="link">SOMETHING ELSE</a>
                <a transition:fade={{duration: 150}} href="#" class="link">BLF ON THE 'NET</a>
            {/if}
        </section>
    </main>
    <section class="section-right link-group">
        {#if loaded}
            <a transition:fade={{duration: 150}} href="#" class="link">&lt;- SOMETHING ELSE</a>
            <a transition:fade={{duration: 150}} href="#" class="link">&lt;- BLF ON THE 'NET</a>
        {/if}
    </section>
</div>

<style>
    .page-group {
        display: flex;
        flex-direction: row;
        justify-content: center;
        min-width: 100vw;
        min-height: 100vh;
    }

    .page-group > main {
        max-width: 60ch;
    }

    .page-group > section {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .section-left {
        align-items: flex-end !important;
    }

    .section-right {
        align-items: flex-start !important;
    }

    .page-group .link {
        font-size: 2rem;
        color: white;
    }

    .playing {
        opacity: 0.2;
    }

    .not-playing {
        opacity: 0;
    }

    .bg-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        transition: opacity 0.5s ease-in;
        overflow: hidden;
        background-size: cover;
    }

    h1, p {
        color: white;
    }

    main {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .tv-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-top: 3rem;
    }

    .tv {
        transition: transform 0.3s ease-in-out;
    }

    .tv:hover {
        transform: scale(1.1);
    }

    .title {
        font-size: 3rem;
    }

    .mobile-link-group {
        visibility: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.4rem;
        padding-block: 2rem;
    }

    @media screen and (max-width: 1024px) {
        .link-group {
            visibility: hidden;
            width: 0 !important;
        }

        .mobile-link-group {
            visibility: visible;
        }
    }

    @media screen and (max-width: 600px) {
        .title {
            font-size: 2rem;
        }
    }
</style>