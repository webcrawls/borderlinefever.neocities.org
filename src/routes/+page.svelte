<script lang="ts">
    import {writable, type Writable} from "svelte/store";
    import {setContext} from "svelte";
    import {page} from "$app/stores";

    const hasAnchor: boolean = $page.url.hash !== ""
    const ready: Writable<boolean> = writable(hasAnchor)
    const loadingProgress: Writable<number> = writable(0.0)
    const playing: Writable<boolean> = writable(false)

    setContext("playing", playing)
    setContext("ready", ready)
    setContext("loadingProgress", loadingProgress)
</script>

<h1 id="about">ABOUT THE FILM</h1>
<blockquote>
    <p>Two brothers decide to explore an old warehouse out of curiosity of what lies inside. They venture through a
        hole
        in the floor into the basement where they find themselves in over their heads in a surreal environment, with
        familiar faces lurking.</p>
</blockquote>
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

<style>
    blockquote {
        border-left: 2px solid white;
        margin-inline: 1rem;
        margin-block: 1rem;
        padding-left: 1rem;
        padding-block: 0.2rem;
        background-color: rgba(255, 255, 255, 0.3);
    }

    p {
        text-indent: 4rem;
        font-size: 16px;
        margin-block: 1rem;
    }
</style>