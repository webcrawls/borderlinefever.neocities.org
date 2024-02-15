<script>
    import TeamCard from "$lib/TeamCard.svelte";
</script>

<article id="team">
    <h2>THE TEAM</h2>
    <TeamCard name="Jude Dauphin" role="Producer"/>
    <TeamCard name="Tyler Eliott" role="Director"/>
    <TeamCard name="Sabrina Ngyen" pronouns="(she/they)" role="1st AD"/>
    <TeamCard name="Mitchell Hook" pronouns="(he/him)" role="Director of Photography"/>
    <TeamCard name="John-Michael Crljen" pronouns="(he/him)" role="Writer"/>
    <TeamCard name="Aidan Gabert" pronouns="(he/him)" role="1st AC"/>
    <TeamCard name="Lucas Minardi" pronouns="(he/him)" role="Grip"/>
    <TeamCard name="Elise Stroud" pronouns="(she/her)" role="Art Director"/>
    <TeamCard name="Abby Mitchell" pronouns="(she/they)" role="Makeup"/>
    <TeamCard name="Ben Lilley" pronouns="(he/him)" role="Assistant Editor"/>
    <TeamCard name="Alistair Grey" pronouns="(he/him)" role="Sound Editor"/>
    <TeamCard name="Milo Galley" pronouns="(he/him)" role="Art Department"/>
    <TeamCard name="Kaden Scott" pronouns="(he/him)" role="Web Designer"/>
</article>

<style>
    #team {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
    }

    h2 {
        font-family: Sixtyfour;
        font-size: 3rem;
        grid-row: 1;
        grid-column: 1 / -1;
    }

    .team-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: center;
    }
</style>
