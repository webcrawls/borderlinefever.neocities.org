<script lang="ts">
    import Loading from "$lib/page-parts/Loading.svelte";

    export let progress: number = 0.0
    export let loaded: boolean = false
</script>

<nav>
    <Loading bind:progress bind:loaded/>
    <a href="/#about">ABOUT</a>
    <a href="/team">TEAM</a>
    <a href="/gallery">STILLS</a>
</nav>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
        height: 100%;
        position: relative;
    }

    a {
        flex: 1 1;
        text-align: center;
        color: white;
        background-color: black;
        border: 2px solid white;

        font-family: Daydream;
        padding: 0.5rem;
        text-decoration: none;
    }
</style>