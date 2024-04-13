<script lang="ts">
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import {page} from "$app/stores"
    import {get, type Writable, writable} from "svelte/store";
    import {onMount, setContext, type SvelteComponent} from "svelte";
    import crewData from '$lib/data/team.json'

    let uiPlaying: boolean = true
    let videoPage: boolean = $page.url.pathname !== '/'
    $: videoPage = $page.url.pathname !== '/'

    const control: Writable<SvelteComponent | undefined> = writable({element: undefined, props: {}})
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

    const scrollElementIntoView = (element: HTMLElement, behavior?: 'smooth' | 'instant' | 'auto') => {

        let scrollTop = window.pageYOffset || element.scrollTop

        // Furthermore, if you have for example a header outside the iframe
        // you need to factor in its dimensions when calculating the position to scroll to
        const finalOffset = element.getBoundingClientRect().top + scrollTop

        element.scrollTo({
            top: finalOffset * 2,
            behavior: behavior || 'auto'
        })

        console.log({finalOffset})
    }

    const centerTv = () => {
        let wrapper = document.querySelector(".main-wrapper")
        scrollElementIntoView(wrapper)
    }

    onMount(() => {
        new ResizeObserver(() => setTimeout(() => centerTv(), 10)).observe(document.body)
    })
</script>

<svelte:window on:load={centerTv}/>

<div id="app">
    <BackgroundVideo playing={uiPlaying && videoPage}/>
    <header>
        <div class="top">
            <h1><a href="/">INTERFERENCE PATTERN</a></h1>
        </div>
        <div class="bottom">
            <p>a Borderline Fever Music Video</p>
            <button style="{!videoPage ? 'opacity: 0.0 !important;' : ''}"
                    on:click|preventDefault={() => uiPlaying = !uiPlaying}>
                [ {uiPlaying ? 'pause' : 'play'} video ]
            </button>
        </div>
    </header>
    <div class="main-wrapper">
        <main class="tv-frame">
            <nav class="tv-nav">
                <a href="/about">About</a>
                <a href="/team">Team</a>
                <a href="/stills">Stills</a>
            </nav>
            <aside class="tv-control">
                {#if $control}
                    <svelte:component this="{$control.element}" {...$control.props}></svelte:component>
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
    </div>
    <footer>
        <div class="footer-container">
            <div class="footer-wrapper">
                <nav class="section">
                    <h1>follow us >></h1>
                    <a href="https://www.instagram.com/borderlinefeverband?igsh=MXMwYW5jMGkxejgybA=="
                       class="icon-link"><img
                            alt="instagram"
                            src="/icons/instagram.svg"/></a>
                    <a href="https://www.tiktok.com/@borderlinefever?_t=8l2BBwqG2sf&_r=10"
                       class="icon-link"><img
                            alt="tiktok"
                            src="/icons/tiktok.svg"/></a>
                    <a href="https://www.youtube.com/channel/UCJ0BtK0-p1aHk923Z0u70gg"
                       class="icon-link"><img
                            alt="youtube"
                            src="/icons/youtube.svg"/></a>
                </nav>
                <nav class="section">
                    <h1><a href="https://borderlinefever.hearnow.com/">stream us</a> >></h1>
                    <a href="https://open.spotify.com/album/2CKCOGT6588ksI1bVJ7GXB?referral=labelaffiliate&utm_source=1100lypAhjU6&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate"
                       class="icon-link">
                        <img alt="spotify"
                             src="/icons/spotify.svg"/></a>
                    <a href="https://music.apple.com/ca/album/goin-steady-single/1717085006?at=1000lM6c&uo=4&app=itunes"
                       class="icon-link">
                        <img alt="apple"
                             src="/icons/apple.svg"/>
                    </a>
                    <a href="https://music.apple.com/ca/album/goin-steady-single/1717085006"
                       class="icon-link">
                        <img alt="amazon"
                             src="/icons/amazon.svg"/></a>
                </nav>
                <div class="section">
                    <p id="credits">made with 💖 by <a href="https://webcrawls.live">webcrawls</a></p>
                </div>
            </div>
            <div class="image-bin">
                <a href="https://www.sheridancollege.ca" rel="external">
                    <img src="/logo/sheridan-logo.png" alt="The Sheridan college logo."
                         style="filter: invert(94%) sepia(94%) saturate(0%) hue-rotate(241deg) brightness(106%) contrast(105%);"/>
                </a>
                <img src="/logo/blf-logo.png" alt="The Borderline Fever logo."/>
            </div>
        </div>
    </footer>
</div>

<style>
    .icon-link img {
        filter: invert(100%) sepia(9%) saturate(1%) hue-rotate(67deg) brightness(101%) contrast(101%);
        width: 24px;
        height: 24px;
    }

    #credits {
        opacity: 0.7;
        font-style: italic;
    }
</style>