<script lang="ts">
    import {getContext, onMount} from "svelte";
    import TeamWidgetControl from "$lib/team-widget/TeamWidgetControl.svelte";
    import crewData from '$lib/team-widget/team.json'

    const crew = crewData.crew

    let crewImg
    let staticImg

    const flicker = () => {
        if (!crewImg) return;
        crewImg.style.opacity = '0'
        setTimeout(() => crewImg.style.opacity = '1', 150)
    }

    let index: number = 0
    const control = getContext("control")
    const currentTeam = getContext("currentTeam")

    $: index = crewData.crew.indexOf($currentTeam)
    $: $currentTeam && flicker()

    onMount(() => {
        $control = TeamWidgetControl
    })
</script>

<svelte:head>
    {#each crewData.crew as member}
        {#if member.image}
            <link rel="preload" href="{member.image}" as="image">
        {/if}
    {/each}
</svelte:head>

<article>
    <section class="crew-info">
        <img bind:this={staticImg} class="crew-static" src="{'/static-crt.gif'}"/>
        <img bind:this={crewImg}
             class:no-image={!$currentTeam.image}
             class="crew-image" src="{$currentTeam.image ?? '/invisible.png'}"/>
        <p class="crew-role"
           class:offset={index % 2 === 0}><b>{$currentTeam.role}</b></p>
        {#if $currentTeam.fav_artist}
            <p class="crew-artist"
               class:offset={index % 2 === 0}>Favourite Artist: <b>{$currentTeam.fav_artist}</b></p>
        {/if}
        {#if $currentTeam.fav_artist_desc}
            <p class="crew-artist-text">{$currentTeam.fav_artist_desc}</p>
        {/if}
    </section>
</article>

<style>
    article {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        position: relative;
    }

    .crew-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .crew-role {
        position: absolute;
        background-color: white;
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        top: -16px;
        left: -16px;
    }

    .crew-role.offset {
        left: unset;
        top: -16px;
        right: 0px;
    }

    .crew-artist {
        position: absolute;
        background-color: white;
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        bottom: -16px;
        right: 0px;
    }

    .crew-artist.offset {
        right: unset;
        bottom: -16px;
        left: -16px;
    }

    .tv-control {
        display: flex;
        flex-direction: row;
    }

    .crew-info {
        z-index: -1;
        width: 100%;
        height: 100%;
    }

    .crew-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        background-color: black;
    }

    .crew-image.no-image {
        background-color: unset;
    }

    .crew-image, .crew-static {
        pointer-events: none;
        user-select: none;
    }

    .crew-static {
        position: absolute;
        top: 0;
        left: 50%;
        width: 87%;
        transform: translateX(-50%);
        height: 100%;
        object-fit: contain;
        z-index: -1;
    }

</style>