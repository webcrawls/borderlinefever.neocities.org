<script lang="ts">
    import PageMain from "$lib/page-sections/PageMain.svelte";
    import PageTeam from "$lib/page-sections/PageTeam.svelte";
    import {writable, type Writable} from "svelte/store";
    import {setContext} from "svelte";
    import PageSocials from "$lib/page-sections/PageSocials.svelte";

    const ready: Writable<boolean> = writable(false)
    setContext("ready", ready)
</script>

<main>
    <PageMain/>
    {#if $ready}
        <div class="loaded-content">
            <PageTeam/>
            <PageSocials/>
        </div>
    {/if}
</main>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loaded-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    :global(body) {
        background-color: black;
    }
</style>