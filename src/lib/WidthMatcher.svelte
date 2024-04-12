<script lang="ts">
    import {onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";

    export let self: string
    export let ref: HTMLElement

    let refObserver: ResizeObserver
    let desiredDims: { width: number, height: number }

    onMount(() => {
        if (!browser) return;
        setTimeout(() => {
            refObserver = new ResizeObserver((entries, observer) => {
                console.log(entries, observer)
                const rect = ref.getBoundingClientRect()
                desiredDims = {width: rect.width, height: rect.height}
            })
            refObserver.observe(ref)
        }, 50)
    })

9
    onDestroy(() => {
        if (!browser) return;
        refObserver.disconnect()
    })
</script>

<svelte:element this="{self}" {style}>
    <slot/>
</svelte:element>