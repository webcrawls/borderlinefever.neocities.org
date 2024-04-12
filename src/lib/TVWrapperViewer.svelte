<script lang="ts">
    import {getContext, onMount} from "svelte";
    import TVWrapperControl from "$lib/TVWrapperControl.svelte";

    interface Entry {
        image: string | undefined,
        name: string | undefined,
        meta: {
            title: string | undefined
            description: string | undefined
        }
    }

    export let entries: Entry[] = []

    let staticElement: HTMLElement = undefined
    let imageElement: HTMLElement = undefined
    let isFlicker: boolean = false

    const flicker = () => {
        if (!imageElement) return;
        // crewImg.style.opacity = '0'
        isFlicker = true
        // setTimeout(() => crewImg.style.opacity = '1', 150)
        setTimeout(() => isFlicker = false, 250)
    }

    let index: number = 0;
    let item: Entry = entries[index]
    $: item = entries[index]

    let showDescription: boolean = false

    const control = getContext("control")
    // $: index = crewData.crew.indexOf($currentTeam)
    // $: $currentTeam && flicker()

    onMount(() => {
        $control = {
            element: TVWrapperControl, props: {
                entries, index: 0, changed: (i) => {
                    console.log("Viewing "+i)
                    index = i
                    showDescription = false
                }
            }
        }
    })
</script>

<svelte:head>
    {#each entries as entry}
        {#if entry.image}
            <link rel="preload" href="{entry.image}" as="image">
        {/if}
    {/each}
</svelte:head>

<section class="image-wrapper">
    <img aria-hidden="true"
         bind:this={staticElement}
         class="static-image"
         class:hidden={!isFlicker}
         alt="Animated TV static, used to emulate the feel of a classic CRT monitor."
         src="{'/static-crt.gif'}"/>
    {#if item}
        <img bind:this={imageElement}
             class:no-image={!item.image ?? true}
             class="main-image"
             alt="An image of {item.name}"
             src="{isFlicker ? '/invisible.png' : item.image}"/>
        <h1 class="text-title"
            class:offset={index % 2 === 0}><b>{item.name ?? 'N/A'}</b></h1>
        {#if item.meta && item.meta.title}
            <div class="description"
                 on:click={() => showDescription = !showDescription}
                 class:offset={index % 2 === 0}>
                <p class="description-title">🎶 <b>{item.meta.title}</b></p>
                {#if item.meta.description && showDescription}
                    <p class="description-text">{item.meta.description}</p>
                {/if}
            </div>
        {/if}
    {/if}
</section>

<style>
    .image-wrapper {
        position: absolute;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: 0;
        left: 0;
    }

    .main-image, .static-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .main-image {
        padding-block: 4%;
    }

    .static-image {
        opacity: 0.9;
        filter: contrast(0.5) blur(1px);
        object-fit: cover;
    }

    .static-image.hidden {
        visibility: hidden;
    }

    .text-title {
        pointer-events: all;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.75);
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        top: 20px;
        left: 20px;
    }

    .text-title.offset {
        pointer-events: all;
        left: unset;
        top: 16px;
        right: 60px;
        text-align: right;
        width: min-content;
        white-space: nowrap;
    }

    .description {
        pointer-events: all;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.75);
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        bottom: 40px;
        max-width: 50%;
        right: 60px;
        margin-right: unset;
        margin-left: 3rem;
    }

    .description .description-title {
        pointer-events: all;
    }

    .description.offset {
        left: 1%;
        right: unset;
        bottom: 2%;
    }

    .description > .description-text {
        font-size: 1rem;
        max-width: 60ch;
    }
</style>