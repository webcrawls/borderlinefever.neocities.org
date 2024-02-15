<script lang="ts">
    import {createEventDispatcher, getContext, onMount} from "svelte";
    import {writable, type Writable} from "svelte/store";

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

    export let progress: number = 0.0

    const ready: Writable<boolean> = getContext("ready")
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

    const hints = [
        "jumping down the hole...",
        "rewinding the VHS...",
        "making new friends...",
        null
    ]

    let hint: string | null = null

    const tick = () => {
        if (value >= max) {
            end()
            return;
        }
        value += 1

        progress = value / max

        setTimeout(tick, Math.random() * (maxWait - minWait) + minWait)
    }

    const updateHint = () => {
        if (!loading) {
            return;
        }
        hint = hints[Math.floor(Math.random() * (hints.length))]
        setTimeout(updateHint, Math.random() * (minHintTime - maxHintTime) + minHintTime)
    }

    onMount(() => {
        if ($ready) {
            loading = true
            hideLoadingText = true
            started = true
            value = max
        }
    })
</script>

<div class="loading" class:hidden={!started}>
    <p class="loading-text">{hideLoadingText ? '\xa0' : loading ? 'loading...' : 'loaded!'}</p>
    <p class="loading-bar">
        <span class="loading-loaded" style="opacity: 1">{'▋'.repeat(value)}</span>
        <span class="loading-unloaded" style="opacity: 0.4">{'▋'.repeat(Math.max(0, max - value))}</span>
    </p>
    <p class="loading-hint">{hint ?? '\xa0'}</p>
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

    .loading-loaded {
        background-image: url("/interference-pattern.png");
        background-attachment: local;
        background-size: cover;
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