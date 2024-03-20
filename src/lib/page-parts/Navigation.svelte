<script lang="ts">
    import Loading from "$lib/page-parts/Loading.svelte";

    export let progress: number = 0.0
    export let loaded: boolean = false
</script>

<nav>
    <Loading bind:progress bind:loaded/>
    <a class:hidden={!loaded} href="/about">ABOUT</a>
    <a class:hidden={!loaded} href="/team">TEAM</a>
    <a class:hidden={!loaded} href="/gallery">VIEW</a>
</nav>

<style>
    nav {
        width: 100%;
        height: 100%;
        position: sticky;

        display: flex;
        flex-direction: row;
        justify-content: center;

        flex-wrap: wrap;
        gap: 1rem;
    }

    a {
        flex: 1 1;
        text-align: center;

        font-size: 20px;
        font-family: Daydream;
        text-decoration: none;
        padding-inline: 0.4rem;
        padding-block: 0.2rem;

        background-color: black;
        color: white;
        border: 2px solid white;

        /*background-color: #5d5d5d;*/
        /*--border-light: #919191;*/
        /*--border-dark: #3d3d3d;*/
        /*border-top: 4px solid  var(--border-light);*/
        /*border-left: 4px solid  var(--border-light);*/
        /*border-right: 4px solid  var(--border-dark);*/
        /*border-bottom: 4px solid  var(--border-dark);*/
    }

    a.hidden {
        opacity: 0;
    }
</style>