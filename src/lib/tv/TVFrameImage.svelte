<script lang="ts">
	import {createEventDispatcher} from "svelte"

	export let opacity: number = 1.0;
	export let image: string = '';

	const dispatch = createEventDispatcher()
</script>

<main class="tv-frame"
			style="--frame-opacity: {opacity}; --tv-frame: url('{image}');"
			on:transitionstart={() => console.log("Transition start")}
			on:transitionend={() => dispatch("transitioned")}>
	<slot />
</main>

<style>
    .tv-frame {
        /*transform: scale(0.9);*/
        max-width: 120ch;
        /*width: 100%;*/
        height: 100%;
        aspect-ratio: 1 / 1;
        position: relative;
        /*overflow-y: hidden;*/

        display: flex;
        justify-content: center;
        align-items: center;
        grid-template-rows: fit-content(100%);
        transform-origin: center center;

        margin: auto;
    }

    .tv-frame::after {
				transition: opacity 2s ease-in-out;
        opacity: var(--frame-opacity, 1.0);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: var(--tv-frame, url("/tv/frame/tv-frame.png"));
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        object-fit: contain;
        aspect-ratio: 1 / 1;
        z-index: -1;
    }
</style>