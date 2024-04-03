<script lang="ts">
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import {page} from "$app/stores"
    import {get, type Writable, writable} from "svelte/store";
    import {onMount, setContext, type SvelteComponent} from "svelte";
    import crewData from '$lib/team-widget/team.json'

    let uiPlaying: boolean = true
    let videoPage: boolean = $page.url.pathname !== '/'
    $: videoPage = $page.url.pathname !== '/'

    const control: Writable<SvelteComponent | undefined> = writable(undefined)
    setContext("control", control)

    const currentTeam: Writable<any> = (() => {
        const store = writable(crewData.crew[0])

        const next = () => {
            const current = get(store)
            const index = crewData.crew.indexOf(current)
            let n = index + 1
            if (n >= crewData.crew.length - 1) {
                n = 0
            }
            store.set(crewData.crew[n])
        }
        const prev = () => {
            const current = get(store)
            const index = crewData.crew.indexOf(current)
            let n = index - 1
            if (n < 0) {
                n = crewData.crew.length - 1
            }
            store.set(crewData.crew[n])
        }

        return {...store, next, prev}
    })()

    setContext("currentTeam", currentTeam)

</script>

<div id="app">
    <BackgroundVideo playing={uiPlaying && videoPage}/>
    <header>
        <div class="top">
            <h1><a href="/">INTERFERENCE PATTERN</a></h1>
        </div>
        <div class="bottom">
            <p>a Borderline Fever Music Video</p>
            <a style="{!videoPage ? 'opacity: 0.0 !important;' : ''}" on:click|preventDefault={() => uiPlaying = !uiPlaying} href="#">[ {uiPlaying ? 'pause' : 'play'} video ]</a>
        </div>
    </header>
    <main>
        <img aria-hidden="true" src="/PATTERN-TV.png" class="tv-background"/>
        <img aria-hidden="true" src="/BUTTON.png" class="tv-background-button"/>
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
            <div class="section-bg"></div>
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
        min-height: 100svh;
        position: absolute;

        overflow: hidden;
        display: grid;
        flex-direction: column;
        grid-template-rows: fit-content(100%) 100svh min-content;
    }

    main {
        max-width: 160ch;
        /*min-width: 70ch;*/
        /*width: 100%;*/
        margin-inline: auto;
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

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    header > div {
        max-width: 120ch;
        width: 100%;
    }

    header > .top {
        display: flex;
        flex-direction: column;
    }

    header > .bottom {
        display: flex;
        justify-content: space-between;
    }

    header .bottom a {
        color: inherit;
        transition: opacity 0.2s;
        opacity: 0.5;
    }

    header .bottom a:hover {
        opacity: 0.8;
    }

    h1 a {
        color: inherit;
    }

    section {
        position: absolute;
        /*z-index: -1;*/
        top: 11%;
        left: 13%;
        width: 77%;
        height: 56%;
        overflow: hidden;
        padding: 2rem;
    }

    section .section-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        z-index: -1;
    }

    section .content-wrapper {
        width: 100%;
        height: 100%;
        padding-block: 5%;
        padding-inline: 5%;
        pointer-events: all;
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
        top: 75.5%;
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
    }

    .tv-background-button {
        position: absolute;
        top: 75%;
        left: 26%;
        height: 8%;
        width: 50%
    }
</style>