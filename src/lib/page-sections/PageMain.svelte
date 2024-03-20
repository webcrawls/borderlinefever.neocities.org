<script lang="ts">
    import {getContext, onMount} from "svelte";
    import type {Writable} from "svelte/store";
    import Loading from "$lib/page-parts/Loading.svelte";

    const ready: Writable<boolean> = getContext("ready")
    const playing: Writable<boolean> = getContext("playing")
    const video: Writable<HTMLVideoElement> = getContext("video")
    const loadingProgress: Writable<number> = getContext("loadingProgress")

    let loadingElement: Loading = undefined
    let easterEgg: boolean = false

    const handleTVClick = () => {
        if (loadingElement.started) {
            return
        }

        loadingElement.start()
    }

</script>

<div class="page-part">
    <div class="logo">
        <img alt="interference pattern logo, grayscale" class="grayscale" src="/logo/logo-colour.webp"
             style="--transition: {$loadingProgress}"/>
        <img alt="interference pattern logo, colour" class="colour" src="/logo/logo-grayscale.webp"
             style="--transition: {1.0 - $loadingProgress}"/>
    </div>
    <div class="tv-group">
        {#if easterEgg}
            <img class="tv-background" src="/tv/!!!-cropped.gif"/>
            <img on:click={handleTVClick} class="tv-image" src="/tv/tv_frame.png"/>
        {:else}
            <img on:click={handleTVClick} class="tv-image" src="/tv/tv_full.png"/>
        {/if}
    </div>
</div>

<style>
    .page-part {
        height: 100svh;
        width: 100vw;

        display: grid;
        grid-template-columns: 40vw 45vw 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 1rem;
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
        min-height: 30rem;
        position: absolute;
        top: 0;
        left: 0;
        object-fit: contain;
        opacity: var(--transition);
    }

    .tv-group {
        grid-column: 2;
        grid-row: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        position: relative;
    }

    .tv-group .tv-image {
        object-fit: contain;
        max-width: 30rem;
        width: 100%;
        height: 100%;
        cursor: pointer;
        filter: drop-shadow(1px 1px 0 black) drop-shadow(-1px -1px 0 black);
    }

    .tv-background {
        position: absolute;
        object-fit: contain;
        width: 100%;
        height: 100%;
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