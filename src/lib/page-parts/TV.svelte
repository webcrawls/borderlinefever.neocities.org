<script lang="ts">
    export let progress: number = 0.0
</script>

<div class="image-wrapper" on:click>
    <div class="image-inner">
        <img id="main-image" src="/tv/tv_pixelated_frame2.png"/>
        <img style="opacity: {1.0 - progress}" id="tv-logo" src="/logo/logo-grayscale.png"/>
        <img style="opacity: {progress}" id="tv-logo" src="/logo/logo-colour.png"/>
    </div>
</div>

<style>
    .image-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem;
    }

    .image-inner {
        width: min-content;
        height: 100%;
        position: relative;
    }

    #main-image {
        width: fit-content(100%);
        height: 100%;
        object-fit: contain;
        display: inline-block;
    }

    #tv-logo {
        position: absolute;
        object-fit: contain;

        /*--debug-border: 4px solid yellow;*/

        top: 50%;
        left: 50%;

        transform: translateX(-50%) translateY(-80%);

        width: 60%;
        height: min-content;

        z-index: -1;
    }
</style>
