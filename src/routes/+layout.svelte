<script lang="ts">
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import {page} from "$app/stores"
    import {type Writable, writable} from "svelte/store";
    import {onMount, setContext, type SvelteComponent} from "svelte";

    let playing: boolean = false
    $: playing = $page.url.pathname !== '/'

    const control: Writable<SvelteComponent | undefined> = writable(undefined)
    setContext("control", control)

    const currentTeam: Writable<any> = writable(undefined)
    setContext("currentTeam", currentTeam)

</script>

<div id="app">
    <BackgroundVideo {playing}/>
    <header>
        <h1><a href="/">INTERFERENCE PATTERN</a></h1>
        <p>a Borderline Fever Music Video</p>
    </header>
    <main>
        <img aria-hidden="true" src="/PATTERN-TV.png" class="tv-background"/>
        <nav class="tv-nav">
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/stills">Stills</a>
        </nav>
        <aside class="tv-control">
            {#if $control}
                <svelte:component this="{$control}"></svelte:component>
            {:else}
                <p>OMG WE GOT KICKSTARTED!!</p>
            {/if}
        </aside>
        <section>
            <div class="content-wrapper">
                <slot/>
            </div>
        </section>
    </main>
    <footer>

    </footer>
</div>

<style>
    :global(#app) {
        width: 100svw;
        height: 100svh;
        position: absolute;

        overflow: hidden;
        display: grid;
        flex-direction: column;
        grid-template-rows: min-content 1fr min-content;
    }

    main {
        max-width: 160ch;
        padding: 1%;
        margin: auto;
        height: 80%;
        aspect-ratio: 1 / 1;
        position: relative;
    }

    header {
        border-bottom: 1px solid white;
        padding-block: 0.5rem;
        background-color: black;
        padding-inline: 1rem;
    }

    h1 a {
        color: inherit;
    }

    section {
        background-color: black;
        position: absolute;
        z-index: -1;
        top: 11%;
        left: 13%;
        width: 77%;
        height: 56%;
        overflow: hidden;
        padding: 2rem;
    }

    section .content-wrapper {
        width: 100%;
        height: 100%;
        padding-block: 5%;
        padding-inline: 5%;
        overflow-y: scroll;
    }

    main .tv-nav {
        position: absolute;
        /*background-color: white;*/
        width: 52%;
        height: 7%;
        top: 87%;
        left: 25%;

        display: flex;
        justify-content: space-between;
        gap: 1rem;
        font-size: 1vw;
        /*background-size: cover;*/
    }

    main .tv-control {
        position: absolute;
        width: 46.75%;
        height: 7%;
        top: 75%;
        left: 27%;
        padding: 2%;

        display: flex;
        justify-content: space-between;
        gap: 1rem;
        /*background-size: cover;*/
    }

    main .tv-nav a {
        color: white;
        font-family: "Daydream";
        background-image: url("/PATTERN-TV-buttons.png");
        background-size: cover;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    main .tv-nav a:hover {
        filter: invert(100%);
    }

    .tv-background {
        width: 100%;
        height: 100%;
        object-fit: contain;
        pointer-events: none;
        z-index: 1;
    }
</style>