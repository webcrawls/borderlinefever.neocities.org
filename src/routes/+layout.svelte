<script lang="ts">
    import BackgroundVideo from "$lib/layout/BackgroundVideo.svelte";
    import {page} from "$app/stores"
    import {get, type Writable, writable} from "svelte/store";
    import {onMount, setContext, type SvelteComponent} from "svelte";
    import crewData from '$lib/data/team.json'
    import {browser} from "$app/environment";

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
        const elementRect = wrapper.getBoundingClientRect();

        // wrapper.scrollIntoView({
        //     behavior: "instant",
        //     block: "center",
        //     inline: "center",
        // });

        scrollElementIntoView(wrapper)
        // wrapper.scrollTo({ left: middle})
        // console.log("scrolling to "+middle)
    }

    onMount(() => {
        new ResizeObserver(() => setTimeout(() => centerTv(), 10)).observe(document.body)
    })

    // let aspectRatio = "unknown"
    //
    // onMount(() => setInterval(() => {
    //     function gcd (a, b) {
    //         return (b == 0) ? a : gcd (b, a%b);
    //     }
    //     var w = screen.width;
    //     var h = screen.height;
    //     var r = gcd (w, h);
    //     aspectRatio = `${w}/${r}`
    // }, 1))
</script>

<svelte:window on:load={centerTv}/>

<div id="app">
    <!--    <div style="font-size: 4rem; position: absolute; top: 0; left: 0; z-index: 999; background-color: white; color: black">-->
    <!--        <p>aspect ratio: {aspectRatio}</p>-->
    <!--    </div>-->
    <BackgroundVideo playing={uiPlaying && videoPage}/>
    <header>
        <div class="top">
            <h1><a href="/">INTERFERENCE PATTERN</a></h1>
        </div>
        <div class="bottom">
            <p>a Borderline Fever Music Video</p>
            <a style="{!videoPage ? 'opacity: 0.0 !important;' : ''}"
               on:click|preventDefault={() => uiPlaying = !uiPlaying} href="#">[ {uiPlaying ? 'pause' : 'play'} video
                ]</a>
        </div>
    </header>
    <div class="main-wrapper">
        <main class="tv-frame">
            <!--            <img aria-hidden="true" src="/PATTERN-TV.png" class="tv-background"/>-->
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
                    <a href="https://www.instagram.com/borderlinefeverband?igsh=MXMwYW5jMGkxejgybA=="><img
                            alt="instagram"
                            src="/icons/instagram.svg"/></a>
                    <a href="https://www.tiktok.com/@borderlinefever?_t=8l2BBwqG2sf&_r=10"><img
                            alt="tiktok"
                            src="/icons/tiktok.svg"/></a>
                    <a href="https://www.youtube.com/channel/UCJ0BtK0-p1aHk923Z0u70gg"><img
                            alt="youtube"
                            src="/icons/youtube.svg"/></a>
                </nav>
                <nav class="section">
                    <h1><a href="https://borderlinefever.hearnow.com/">stream us</a> >></h1>
                    <a href="https://open.spotify.com/album/2CKCOGT6588ksI1bVJ7GXB?referral=labelaffiliate&utm_source=1100lypAhjU6&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate">
                        <img alt="spotify"
                             src="/icons/spotify.svg"/></a>
                    <a href="https://music.apple.com/ca/album/goin-steady-single/1717085006?at=1000lM6c&uo=4&app=itunes">
                        <img alt="apple"
                             src="/icons/apple.svg"/>
                    </a>
                    <a href="https://music.apple.com/ca/album/goin-steady-single/1717085006">
                        <img alt="amazon"
                             src="/icons/amazon.svg"/></a>
                </nav>
                <div class="section">
                    <p id="credits">made with 💖 by <a href="https://webcrawls.live">webcrawls</a></p>
                </div>
            </div>
            <div class="image-bin">
                <img src="/logo/sheridan-logo.png" alt="The Borderline Fever logo."
                     style="filter: invert(94%) sepia(94%) saturate(0%) hue-rotate(241deg) brightness(106%) contrast(105%);"/>
                <img src="/logo/blf-logo.png" alt="The Sheridan College logo."/>
            </div>
        </div>
    </footer>
</div>

<style>
    .footer-wrapper a img {
        filter: invert(100%) sepia(9%) saturate(1%) hue-rotate(67deg) brightness(101%) contrast(101%);
        width: 24px;
        height: 24px;
    }

    #credits {
        opacity: 0.7;
        font-style: italic;
    }
</style>