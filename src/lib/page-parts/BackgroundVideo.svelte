<script lang="ts">
    export let playing: boolean = false

    let video: HTMLVideoElement = undefined

    $: {
        if (playing) {
            video?.play()
        } else {
            video?.pause()
        }
    }
</script>

<video bind:this={video} class="bg-video" class:playing class:not-playing={!playing} autoplay muted loop onloadstart="">
    <source src="/junkyard-effects.mp4" type="video/mp4"/>
</video>

<style>
    .playing {
        opacity: 0.2;
    }

    .not-playing {
        opacity: 0;
    }

    .bg-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
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