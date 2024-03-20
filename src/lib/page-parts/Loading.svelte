<script lang="ts">
    export let progress: number = 0.0
    export let loaded: boolean = false
</script>

<div class="loading" aria-hidden="true"
     class:done={loaded}>
    <div class="loading-background">
        <p>Awaiting input...</p>
    </div>
    <div class="loading-foreground" style="--foreground-width: {Math.round(progress * 100)}%"></div>
</div>

<style>
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        pointer-events: none;
        font-family: monospace;

        color: white;

        display: flex;
        flex-direction: column;
        align-items: center;

        opacity: 1;
        transition: opacity 0.5s;
    }

    .loading.done {
        opacity: 0;
    }

    .loading-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";

        background-color: #000000;
        color: white;
        font-size: 20px;
        border: 1px solid white;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading-background p {
        opacity: 0.7;
    }

    .loading-foreground {
        position: absolute;
        top: 0;
        left: 0;
        width: var(--foreground-width);
        height: 100%;

        background-size: 100vw;
        background-repeat: repeat;
        background-position: center center;
        background-image: url("/interference-pattern.png");
        background-attachment: local;

        /*animation-duration: 100s;*/
        /*animation-timing-function: linear;*/
        /*animation-iteration-count: infinite;*/

        opacity: 1;
        transition: opacity 0.35s ease-in-out;
    }

    /*.loading-foreground.animate {*/
    /*    animation-name: animated-background;*/
    /*}*/

    /*@keyframes animated-background {*/
    /*    from {*/
    /*        background-position-x: 0;*/
    /*    }*/
    /*    to {*/
    /*        background-position-x: -200%;*/
    /*    }*/
    /*}*/
</style>