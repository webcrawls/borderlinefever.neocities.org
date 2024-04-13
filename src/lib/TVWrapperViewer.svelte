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

    export let baseTitle: string = ""
    export let metaTitle: string = ""

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
                    console.log("Viewing " + i)
                    index = i
                    showDescription = false
                    flicker()
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
             class:no-image={!item.image}
             class="main-image"
             alt="An image of {item.name}."
             src="{isFlicker ? '/invisible.png' : item.image}"/>
        <section class="text-container"
                 class:offset={index % 2 !== 0}
                 class:hidden={isFlicker}>
            <h1>{baseTitle ?? 'n/a'}</h1>
            <p><b>{item.name ?? 'N/A'}</b></p>
        </section>
        {#if item.meta && item.meta.title}
            <section class="text-container alt"
                     class:offset={index % 2 !== 0}
                     class:hidden={isFlicker}>
                <h1>{metaTitle ?? 'n/a'}</h1>
                <p class="description-title"><b>{item.meta.title}</b></p>
                {#if item.meta.description && showDescription}
                    <p class="description-text">{item.meta.description}</p>
                {/if}
            </section>
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

    .text-container {
        pointer-events: all;
        position: absolute;
        background-color: rgba(255, 255, 255, 0.75);
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border: 2px solid black;
        backdrop-filter: blur(4px);
        border-radius: 2px;

        width: min-content;
        height: min-content;
        white-space: nowrap;
        display: flex;
        flex-direction: column;

        --top-distance: 4%;
        --left-distance: 4%;
        --right-distance: 8%;
        --bottom-distance: 4%;

        --background-1: rgba(137, 220, 255, 0.7);
        --background-2: rgba(160, 255, 160, 0.7);

        background: var(--background-1);

        top: var(--top-distance);
        left: var(--left-distance);
    }

    .text-container.alt {
        background: var(--background-2);

        top: unset;
        left: unset;
        bottom: var(--bottom-distance);
        right: var(--right-distance);
    }

    .text-container.alt.offset {
        background: var(--background-1);

        top: unset;
        left: var(--left-distance);
        bottom: var(--bottom-distance);
        right: unset;
    }

    .text-container.offset {
        background: var(--background-2);

        top: var(--top-distance);
        left: unset;
        right: var(--right-distance);
        bottom: unset;
    }

    .text-container h1 {
        font-size: 12px;
        font-style: italic;
        font-weight: normal;
    }

    .text-container p {
        font-size: clamp(14px, 3vw, 20px);
    }

    .hidden {
        visibility: hidden;
    }
</style>