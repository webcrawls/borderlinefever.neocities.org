<script lang="ts">
    import Navigation from "$lib/page-parts/Navigation.svelte";
    import TV from "$lib/page-parts/TV.svelte";
    import {createEventDispatcher} from "svelte";
    import PositionTransition from "$lib/layout/PositionTransition.svelte";

    export let loaded: boolean = false
    export let progress: number = 0.0

    let tvCollapsed: HTMLElement;
    let tvFull: HTMLElement;

    let navCollapsed: HTMLElement;
    let navFull: HTMLElement;

    const dispatch = createEventDispatcher()
</script>

<header class:loaded={loaded}>
    <h1 class="button">CONTENT CONTENT CONTENT</h1>
    <nav>
        <a href="/#about" class="button">ABOUT</a>
        <a href="/team" class="button">TEAM</a>
        <a href="/stills" class="button">STILLS</a>
    </nav>
</header>

<style>
    header {
        height: 100svh;
        width: 100svw;
        margin-inline: auto;
        overflow: hidden;
        position: relative;
        /*transition: background-color 0.3s, border-bottom-color 0.3s, height 0.3s;*/

        background-image: url("/PATTERN-TV.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    header h1, header nav {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, 50%) translateX(var(--offset-x)) translateY(var(--offset-y));
    }

    header h1 {
        --offset-x: 0%;
        --offset-y: 285%;
    }

    .button {
        min-height: 40px;
        width: min-content;
        padding-inline: 1rem;
        padding-block: 1rem;
        white-space: nowrap;

        border-image-slice: 8 8 8 8 fill;
        border-image-width: 24px 24px 24px 24px;
        border-image-outset: 0px 0px 0px 0px;
        border-image-repeat: repeat repeat;
        border-image-source: url("data:image/png;base64,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");
        border-style: solid;

        font-family: Daydream;
    }

    /*#tv-frame {*/
    /*    position: absolute;*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    object-fit: contain;*/

    /*    padding-inline: 5vw;*/
    /*    padding-block: 5vh;*/
    /*}*/

    /*header.loaded {*/
    /*    height: 30svh;*/
    /*    position: sticky;*/
    /*    background-color: black;*/
    /*    border-bottom: 2px solid white;*/
    /*}*/

    /*.collapsed-layout {*/
    /*    --debug-border: 4px solid red;*/
    /*    width: 100%;*/
    /*    height: 100%;*/

    /*    max-width: 120ch;*/
    /*    margin-inline: auto;*/

    /*    display: flex;*/
    /*    flex-direction: row;*/
    /*}*/

    /*.collapsed-layout > .collapsed-tv {*/
    /*    --debug-border: 2px solid blue;*/
    /*    width: min-content;*/
    /*    height: 100%;*/
    /*    aspect-ratio: 1 / 1;*/
    /*}*/

    /*.collapsed-layout > .collapsed-nav {*/
    /*    --debug-border: 2px solid green;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*}*/

    /*.full-layout {*/
    /*    position: absolute;*/
    /*    --debug-border: 4px solid red;*/
    /*    width: 100svw;*/
    /*    height: 100svh;*/
    /*    top: 0;*/
    /*    left: 0;*/

    /*    display: grid;*/
    /*    gap: 2rem;*/
    /*    grid-template-rows: 80vh 20vh;*/
    /*    grid-template-columns: 1fr;*/
    /*    transition: grid-template-rows 0.25s;*/
    /*}*/

    /*.full-layout > .full-tv {*/
    /*    --debug-border: 2px solid blue;*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    aspect-ratio: 1 / 1;*/
    /*}*/

    /*.full-layout > .full-nav {*/
    /*    width: 100%;*/
    /*    max-width: 120ch;*/
    /*    margin-inline: auto;*/
    /*    height: 100%;*/
    /*    --debug-border: 2px solid green;*/
    /*}*/
</style>
