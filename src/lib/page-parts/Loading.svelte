<script lang="ts">
    import {getContext} from "svelte";
    import type {Writable} from "svelte/store";

    export let progress: number = 0.0
    export let loaded: boolean = false

    const js: Writable<boolean> = getContext("js")

    let loadedSegments = 0
    const segments = 30

    $: loadedSegments = progress === 0.0 ? 0 : loaded ? 0 : Math.floor(segments * progress) + 1
    $: console.log({loadedSegments, progress, loaded})
</script>

<section class="loading {(($js === false) && loaded || progress === 1.0) ? '' : 'is-hidden'}"
         aria-hidden="true"
         class:is-hidden={($js === false) && loaded || progress === 1.0}>
    <header>
        <h2 class:ellipses={progress !== 0.0 || progress !== 1.0}>Loading</h2>
        <button>x</button>
    </header>
    <div class="loading-container">
        <div class="loading-bar">
            {#each {length: segments} as _, idx}
                <div class="loading-segment" class:is-loaded={loaded || (idx < loadedSegments)}></div>
            {/each}
        </div>
    </div>
</section>

<style>
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        pointer-events: none;
        font-family: monospace;

        color: white;

        display: flex;
        flex-direction: column;

        opacity: 1;
        transition: opacity 0.1s;

        background-color: black;
        border: 2px solid white;
    }

    .is-hidden {
        opacity: 0;
    }

    .loading header {
        width: 100%;
        background-image: linear-gradient(to right, #00006c, #24b3e5);
        padding-inline: 0.5rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .loading header .ellipses::after {
        display: inline-block;
        animation: dotty steps(1, end) 1s infinite;
        content: '';
    }

    @keyframes dotty {
        0% {
            content: '';
        }
        25% {
            content: '.';
        }
        50% {
            content: '..';
        }
        75% {
            content: '...';
        }
        100% {
            content: '';
        }
    }

    .loading button {
        width: 16px;
        height: 16px;
        border: 2px outset #d0d0d0;
        background-color: #bbbbbb;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading-container {
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading-bar {
        display: flex;
        flex-direction: row;
        margin-block: auto;
        gap: 0.5rem;
        height: 2.5rem;
        width: 100%;
    }

    .loading-segment {
        height: 100%;
        width: 100%;
        flex: 1 1;
        display: block;
        border: 2px solid white;
    }

    .loading-segment.is-loaded {
        background-color: white;
    }
</style>