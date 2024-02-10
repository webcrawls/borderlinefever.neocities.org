<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export const start: () => void = () => {
        started = true
        loading = true
        updateHint()
        tick()
    }

    export const end: () => void = () => {
        dispatch("done");
        loading = false
        hint = null
        setTimeout(() => hideLoadingText = true, 500)
    }

    const dispatch = createEventDispatcher()

    let started: boolean = false
    let loading: boolean = false
    let max: number = 28
    let value: number = 0
    let hideLoadingText: boolean = false

    const minWait: number = 25
    const maxWait: number = 250

    const minHintTime: number = 1000
    const maxHintTime: number = 1250

    const hints = ["jumping down the hole...",
        "rewinding the VHS...",
        "making new friends...",
        null]

    let hint: string | null = null

    const tick = () => {
        if (value >= max) {
            end()
            return;
        }
        value += 1
        setTimeout(tick, Math.random() * (maxWait - minWait) + minWait)
    }

    const updateHint = () => {
        if (!loading) {
            return;
        }
        hint = hints[Math.floor(Math.random() * (hints.length))]
        setTimeout(updateHint, Math.random() * (minHintTime - maxHintTime) + minHintTime)
    }
</script>

<div class="loading" class:hidden={!started}>
    <p class="loading-text" class:hidden={hideLoadingText}>{loading ? 'loading...' : 'loaded!'}</p>
    <p class="loading-bar">
        <span class="loading-loaded" style="opacity: 1">{'▋'.repeat(value)}</span>
        <span class="loading-unloaded" style="opacity: 0.4">{'▋'.repeat(Math.max(0, max - value))}</span>
    </p>
    <p class="loading-hint">{hint ?? ' '}</p>
</div>

<style>
    .loading {
        pointer-events: none;
        font-family: monospace;
        opacity: 1;
        transition: opacity 0.25s ease-in-out;
        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
    }

    .loading-text {
        opacity: 1;
        transition: opacity 0.25s ease-in-out;
    }

    .loading-text.hidden {
        opacity: 0;
    }

    .loaded-button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        border: 1px solid white;
        border-radius: 2px;
        opacity: 0;
        pointer-events: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease-in-out;
    }

    .loaded-button button {
        background-color: unset;
        border: none;
        color: white;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
    
    .loaded-button.visible {
        opacity: 1;
        pointer-events: all;
    }

    .loading-loaded {
        background-image: url("/interference-pattern.png");
        background-attachment: fixed;
        background-size: contain;
        background-repeat: repeat;
        background-position: center center;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;

        animation-name: animated-background;
        animation-duration: 100s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .loading-bar {
        font-weight: bold;
        font-size: 1.15rem;
    }

    .loading.hidden {
        opacity: 0;
    }

    @keyframes animated-background {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-200%);
        }
    }
</style>