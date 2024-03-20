<script lang="ts">
    /**
     * A value from 0.0 to 1.0. Determines the fade level of the colour. (0.0 being grayscale, 1.0 being full colour)
     */
    export let progress: number = 0.0
</script>

<div class="logo-container">
    <img src="/logo/logo-grayscale.png" style="opacity: {100 - (progress * 100)}%"/>
    <img src="/logo/logo-colour.png" style="opacity: {(progress * 100)}%"/>
</div>

<style>
    .logo-container {
        /*width: 100%;*/
        /*height: 100%;*/
        position: relative;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    img:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
    }
</style>