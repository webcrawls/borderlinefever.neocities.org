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
    <!--    <div class="header-inner" class:relocate={transitionElements}>-->
    <div class="collapsed-layout">
        <div class="collapsed-tv" bind:this={tvCollapsed}></div>
        <div class="collapsed-nav" bind:this={navCollapsed}></div>
    </div>
    <div class="full-layout no-debug">
        <div class="full-tv" bind:this={tvFull}></div>
        <div class="full-nav" bind:this={navFull}></div>
    </div>
    <PositionTransition initial="{tvFull}"
                        end="{tvCollapsed}"
                        toggle="{loaded}">
        <TV progress="{progress}"
            on:click={() => dispatch("interact")}/>
    </PositionTransition>
    <PositionTransition initial="{navFull}"
                        end="{navCollapsed}"
                        toggle="{loaded}">
        <Navigation progress="{progress}"
                    loaded="{loaded}"/>
    </PositionTransition>
    <!--    </div>-->
</header>

<style>
    header {
        height: 100svh;
        width: 100svw;

        margin-inline: auto;

        --debug-border: 4px solid blue;

        overflow: hidden;

        position: relative;

        transition: background-color 0.3s, border-bottom-color 0.3s, height 0.3s;
    }

    header.loaded {
        height: 30svh;
        position: sticky;
        background-color: black;
        border-bottom: 2px solid white;
    }

    .collapsed-layout {
        --debug-border: 4px solid red;
        width: 100%;
        height: 100%;

        max-width: 120ch;
        margin-inline: auto;

        display: flex;
        flex-direction: row;
    }

    .collapsed-layout > .collapsed-tv {
        --debug-border: 2px solid blue;
        width: min-content;
        height: 100%;
        aspect-ratio: 1 / 1;
    }

    .collapsed-layout > .collapsed-nav {
        --debug-border: 2px solid green;
        width: 100%;
        height: 100%;
    }

    .full-layout {
        position: absolute;
        --debug-border: 4px solid red;
        width: 100svw;
        height: 100svh;
        top: 0;
        left: 0;

        display: grid;
        gap: 2rem;
        grid-template-rows: 80vh 20vh;
        grid-template-columns: 1fr;
        transition: grid-template-rows 0.25s;
    }

    .full-layout > .full-tv {
        --debug-border: 2px solid blue;
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
    }

    .full-layout > .full-nav {
        width: 100%;
        max-width: 120ch;
        margin-inline: auto;
        height: 100%;
        --debug-border: 2px solid green;
    }
</style>
