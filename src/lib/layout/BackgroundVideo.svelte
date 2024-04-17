<script lang="ts">
	export let playing: boolean = false;
	export let opacity: number = 0.0;

	let video: HTMLVideoElement = undefined;

	$: {
		if (playing) {
			video?.play();
		} else {
			video?.pause();
		}
	}
</script>

<video bind:this={video}
			 style="opacity: clamp(0.0, {opacity}, 0.2);"
			 class="bg-video"
			 autoplay muted loop onloadstart=""
			 aria-hidden="true">
	<source src="https://webcrawls.live/junkyard-effects.mp4" type="video/mp4" />
</video>

<style>
    .bg-video {
        /*width: 100vw;*/
        /*height: 100vh;*/
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        transform: scale(1.1);
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        transition: opacity 0.5s ease-in;
        overflow: hidden;
        background-size: cover;
    }
</style>