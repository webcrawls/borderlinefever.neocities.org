<script lang="ts">
    import {getContext} from "svelte";
    import crewData from '$lib/team-widget/team.json'

    const currentTeam = getContext("currentTeam")
</script>

<div class="team-widget">
    <button on:click={currentTeam.prev}>Previous</button>
    <select bind:value={$currentTeam}>
        {#each crewData.crew as team}
            <option value="{team}">{team.name} ({team.role})</option>
        {/each}
    </select>
    <button on:click={currentTeam.next}>Next</button>
</div>

<style>
    .team-widget {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    button {
        color: transparent;
        width: 30px;
        aspect-ratio: 1 / 1;
        background-size: 100%;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button:first-of-type {
        background-image: url("/button-left.png");
    }

    button:last-of-type {
        background-image: url("/button-right.png");
    }

    button:first-of-type:hover {
        background-image: url("/button-left-hover.png");
    }

    button:last-of-type:hover {
        background-image: url("/button-right-hover.png");
    }

    select {
        font-size: 1.35rem;
        border: 2px solid rgba(255, 255, 255, 0.4);
        color: rgba(255, 255, 255, 0.6);
        background-color: unset;
        border-radius: 0;
        padding-inline: 0.25rem;
        padding-block: 0.2rem;
        text-align: center;
        cursor: pointer;
        width: 100%;
        margin-inline: 1rem;
        text-overflow: ellipsis;
    }

    select:hover {
        color: rgba(255, 255, 255, 0.95);
    }

    select option {
        color: black;
        font-size: 1rem;
    }
</style>