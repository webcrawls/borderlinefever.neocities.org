<script lang="ts">
    import {getContext, onMount} from "svelte";
    import TVScrollHint from "$lib/TVScrollHint.svelte";

    const control = getContext("control")

    let scroller = $state(undefined)

    onMount(() => {
        control.element = TVScrollHint
        control.props = { scoller }
    })
</script>

<div class="text" bind:this={scroller}>
    <div class='image-caption'>
        <h1 id="about">ABOUT THE FILM</h1>
        <blockquote>
            <p>Two brothers decide to explore an old warehouse out of curiosity of what lies inside. They venture through a
                hole
                in the floor into the basement where they find themselves in over their heads in a surreal environment, with
                familiar faces lurking.</p>
        </blockquote>
        <img alt="Tyler and Darius standing outside a warehouse." src="/stills/1.jpg"/>
    </div>
    <hr/>
    <p>Interference Pattern is a story about how it's scary navigating something new, but finding that trust amongst
        yourselves to keep you going.</p>
    <p>Tyler and Darius wander aimlessly before happening upon an abandoned warehouse. With nothing else to do the pair
        venture inside. Apprehensive at first, the pair find a place to relax. Darius accidentally drops his jacket down
        a
        hole leading to the basement, with no other option than to venture down to retrieve the garment.</p>
    <p>The friends are in shock at what awaits them: a cascade of old technology. Camcorders and computer monitors fill
        the
        space, with hundreds of VHS tapes strewn about. Not sure what to make of it, Tyler and Darius investigate their
        surroundings with caution. At the end of the hallway they find a door. With shaky hands they pry it open and are
        horrified. Behind it lay themselves, dressed in full glam attire playing music. Darius and Tyler make a run for
        it
        with their doppelgangers in toe. Unable to get out the way they came in, the friends embrace themselves and
        prepare
        for the worst.</p>
</div>

<style>
    .text {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-inline: auto;
        overflow-y: scroll;
        width: 100%;
        height: 100%;
        padding-right: 2.5rem;
        color: #c0c0c0;

        position: relative;
    }

    .text > p {
        max-width: 60ch;
        margin-inline: auto;
        width: 100%;
    }

    .text h1 {
        font-family: Sixtyfour;
        font-size: 2rem;
        color: white;
        width: 100%;
        font-weight: normal;
        text-align: start;
        padding: 0.5rem;
    }

    .text blockquote {
        background-color: rgba(255, 255, 255, 0.7);
        padding-block: 1rem;
        border-left: 3px solid white;
        color: #1f1f1f;
        padding-inline: 1.5rem;
        font-style: italic;
    }

    .image-caption {
        /*max-height: 20ch;*/
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 20rem;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .image-caption img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .image-caption blockquote {
        position: relative;
        /*position: absolute;*/
        /*bottom: 0;*/
        /*left: 0;*/
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>