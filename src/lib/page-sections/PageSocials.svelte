<script>
    import TeamCard from "$lib/TeamCard.svelte";
</script>

<article id="team">
    <h2>SOCIALS</h2>
    <div class="socials-list">
        <div class="column">
            <h3>STREAM US. NOW.</h3>
            <a href="#">spotify</a>
            <a href="#">apple music</a>
            <a href="#">youtube music</a>
        </div>
        <div class="column">
            <h3>LIKE OUR POSTS. NOW.</h3>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">youtube</a>
            <a href="#">tiktok</a>
        </div>
    </div>
</article>

<style>
    #team {
        max-width: 120ch;
        width: 100%;
        padding-block: 3rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .socials-list {
        display: flex;
        flex-direction: row;
    }

    .column {
        display: flex;
        flex: 1 1;
        flex-direction: column;
    }

    h2 {
        font-family: Sixtyfour;
        font-size: 3rem;
    }

    h3 {
        font-weight: bold;
        font-size: 1.75rem;
    }

    .team-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
    }
</style>
