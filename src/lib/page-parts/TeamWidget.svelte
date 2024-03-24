<script lang="ts">
    const crew = [
        {name: 'Jude Dauphin', pronouns: 'They/Them', role: 'Producer/Editor'},
        {name: 'Tyler Eliott', pronouns: 'They/Them', role: 'Director'},
        {name: 'Sabrina Ngyen', pronouns: 'She/They', role: '1st AD'},
        {name: 'Mitchell Hook', pronouns: 'He/Him', role: 'DoP'},
        {name: 'John-Michael Crljen', pronouns: 'He/Him', role: 'Writer'},
        {name: 'Aidan Gabert', pronouns: 'He/Him', role: '1st AC'},
        {name: 'Fj Tai', pronouns: 'She/Her', role: 'Camera Op'},
        {name: 'Lucas Minardi', pronouns: 'He/Him', role: 'Grip'},
        {name: 'Elise Stroud', pronouns: 'She/Her', role: 'Art Director'},
        {name: 'Abby Mitchell', pronouns: 'She/They', role: 'Makeup'},
        {name: 'Ben Lilley', pronouns: 'He/Him', role: 'Assistant Editor'},
        {name: 'Alistair Grey', pronouns: 'He/Him', role: 'Sound Editor'},
        {name: 'Milo Galley', pronouns: 'Any', role: 'Art Department'},
        {name: 'Kaden Scott', pronouns: 'He/Him', role: 'Web Design'}
    ];
</script>

<article>
    <section class="image-container">
        <img src="https://placehold.co/125x125"/>
        <nav>
            <button>◀</button>
            <h1>test</h1>
            <button>▶</button>
        </nav>
    </section>
    <section class="info-container">
        <h1>Kaden Scott</h1>
        <p>l</p>
        <ul>
            <li>something</li>
            <li>something 2</li>
        </ul>
    </section>
</article>

<style>
    article {
        border: 2px solid white;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
    }

    section {
        flex: 1 1;
        background-color: gray;
        border: 2px solid black;
    }

    ul {
        padding-inline: 1.5rem;
    }

    section > img {
        width: 100%;
        height: 100%;
    }

    .image-container {
        display: flex;
        flex-direction: column;
    }

    .image-container > nav {
        border: 2px solid black;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.2rem;
    }

    .image-container > nav button {
        max-width: 1.75rem;
        text-align: center;
        width: 100%;
    }
</style>