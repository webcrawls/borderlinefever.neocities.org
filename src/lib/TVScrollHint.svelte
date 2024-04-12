<script lang="ts">
    import {onMount} from "svelte";

    export let scroller: HTMLElement

    let show: boolean = true

    onMount(() => {
        scroller.addEventListener('scroll', (e) => {
            console.log({e})
            show = false
        })
    })
</script>

<p class:hidden={!show}>scroll for more!</p>

<style>
    .hidden {
        opacity: 0;
    }

    p {
        transition: opacity 0.2s ease-in-out;
        width: 100%;
        margin-block: auto;
        font-style: italic;
        opacity: 0.7;
        cursor: default;
        text-align: center;
    }
</style>