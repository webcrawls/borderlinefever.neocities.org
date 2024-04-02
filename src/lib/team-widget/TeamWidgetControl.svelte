<script lang="ts">
    import {getContext} from "svelte";

    const currentTeam = getContext("currentTeam")
</script>

<div class="team-widget">
    <button on:click={() => window.dispatchEvent(new CustomEvent("team:previous"))}>Previous</button>
    <p>{$currentTeam?.name}</p>
    <button on:click={() => window.dispatchEvent(new CustomEvent("team:next"))}>Next</button>
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
</style>