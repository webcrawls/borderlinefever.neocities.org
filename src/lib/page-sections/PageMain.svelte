<script lang="ts">
    import {getContext, onMount} from "svelte";
    import type {Writable} from "svelte/store";
    import Loading from "$lib/page-parts/Loading.svelte";

    const ready: Writable<boolean> = getContext("ready")
    const playing: Writable<boolean> = getContext("playing")
    const video: Writable<HTMLVideoElement> = getContext("video")
    const loadingProgress: Writable<number> = getContext("loadingProgress")

    let loadingElement: Loading = undefined

    const handleTVClick = () => {
        if (loadingElement.started) {
            return
        }

        loadingElement.start()
    }
</script>

<div class="page-part">
    <div class="link-group-left" class:hidden={!$ready}>
        <a href="#team">MEET THE TEAM</a>
        <a href="#film">SEE THE FILM</a>
    </div>
    <div class="logo">
        <img alt="interference pattern logo, grayscale" class="grayscale" src="/logo/logo-colour.webp"
             style="--transition: {$loadingProgress}"/>
        <img alt="interference pattern logo, colour" class="colour" src="/logo/logo-grayscale.webp"
             style="--transition: {1.0 - $loadingProgress}"/>
    </div>
    <div class="tv-group">
        <img on:click={handleTVClick} class="tv-image" src="/monitor.png"/>
        <Loading bind:progress={$loadingProgress} bind:this={loadingElement}
                 on:done={() => { $ready = true; $playing = true;}}/>
    </div>
    <div class="link-group-right" class:hidden={!$ready}>
        <a href="#kickstart">KICKSTART US</a>
        <a href="#blf">BLF ON THE NET</a>
    </div>
</div>

<style>
    .page-part {
        height: 100svh;
        width: 100vw;

        display: grid;
        grid-template-columns: 1fr 45vw 1fr;
        grid-template-rows: 1fr 1fr;
        color: white;
    }

    .logo {
        position: relative;

        grid-column: 1 / -1;
        grid-row: 1;

        display: flex;
        justify-content: center;
    }

    .logo > .colour, .logo > .grayscale {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: contain;
        opacity: var(--transition);
    }

    .link-group-left, .link-group-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }

    .link-group-left.hidden, .link-group-right.hidden {
        opacity: 0;
    }

    .link-group-left {
        grid-column: 1;
        grid-row: 2;
        align-items: flex-end;
        height: 100%;
    }

    .link-group-right {
        grid-column: 3;
        grid-row: 2;
        align-items: flex-start;
        height: 100%;
    }

    .tv-group {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
    }

    .tv-group > .tv-image {
        object-fit: contain;
        max-width: 30rem;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        .page-part {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            color: white;
        }

        .logo {
            grid-column: 1 / -1;
            grid-row: 1;
        }

        .tv-group {
            grid-column: 1 / -1;
            grid-row: 2;
        }

        .link-group-right {
            grid-column: 1;
            grid-row: 3;
            padding: 0.35rem;
            justify-content: flex-end;
            align-items: center;
            font-size: 1.5rem;
            text-align: center;
        }

        .link-group-left {
            grid-column: 2;
            grid-row: 3;
            font-size: 1.5rem;
            padding: 0.35rem;
            justify-content: flex-end;
            align-items: center;
            text-align: center;
        }
    }
</style>