<script>
    import TeamCard from "$lib/TeamCard.svelte";
</script>

<article id="team">
    <h2>THE TEAM</h2>
    <div class="team-list">
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
        <TeamCard/>
    </div>
</article>

<style>
    #team {
        max-width: 120ch;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    h2 {
        font-family: Sixtyfour;
        font-size: 3rem;
    }

    .team-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }
</style>
