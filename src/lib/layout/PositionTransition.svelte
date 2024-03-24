<script lang="ts" context="module">
    export interface Dimensions {
        x: number,
        y: number
        width: number,
        height: number
    }
</script>

<script lang="ts">
    import {onMount} from "svelte";
    import {browser} from "$app/environment";

    export let initial: HTMLElement
    export let end: HTMLElement

    export let toggle: boolean = false

    $: console.log({initial, end, toggle})

    let initialDimensions: Dimensions | undefined = undefined
    let endDimensions: Dimensions | undefined = undefined

    let currentPosition = initialDimensions
    $: currentPosition = toggle ? endDimensions : initialDimensions
    $: console.log({currentPosition})

    let self: HTMLElement
    let observer: ResizeObserver

    onMount(() => {
        if (!browser) return

        setTimeout(() => {
            observer = new ResizeObserver((entries) => {
                initialDimensions = observe(initial)
                endDimensions = observe(end)
            })
            observer.observe(initial)
            observer.observe(end)
            observer.observe(document.body)
        }, 10)
    })

    const observe = (e: HTMLElement) => {
        const {x, y, width, height, ...rect} = e.getBoundingClientRect()
        // return {x: rect.left, y: rect.top, width, height}
        return {x: e.offsetLeft, y: e.offsetTop, width, height}
    }
</script>

<div class="transition-wrapper"
     class:initial={!toggle}
     class:end={toggle}
     style="--left: {currentPosition?.x}px;
            --top: {currentPosition?.y}px;
            --width: {currentPosition?.width}px;
            --height: {currentPosition?.height}px;"
     bind:this={self}>
        <slot/>
</div>

<style>
    .transition-wrapper {
        position: absolute;
        top: var(--top);
        left: var(--left);
        width: var(--width);
        height: var(--height);

        transition: top 0.1s, left 0.1s, width 0.1s, height 0.1s
    }

    :global(.initial){}
    :global(.end){}
</style>