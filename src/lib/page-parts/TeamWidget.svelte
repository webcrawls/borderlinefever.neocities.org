<script lang="ts">
    const crew = [
        {name: 'Jude Dauphin', pronouns: 'They/Them', role: 'Producer/Editor', image: '/team/Jude.png'},
        {name: 'Darius', pronouns: 'They/Them', role: 'Producer/Editor', image: '/team/Darius.png', fav_artist: 'MGMT'},
        {name: 'Tyler Eliott', pronouns: 'They/Them', role: 'Director', image: '/team/Tyler 1.png'},
        {
            name: 'Sabrina Ngyen',
            pronouns: 'She/They',
            role: '1st AD',
            image: '/team/Sabrina.png',
            fav_artist: 'Tyler the Creator',
            fav_artist_desc: 'I love the perspective he gives and the stories he tells in his music. Also his play with words are fun to listen to.'
        },
        {
            name: 'Mitchell Hook',
            pronouns: 'He/Him',
            role: 'DoP',
            image: '/team/Mitch.png',
            fav_artist: 'Talking Heads',
            fav_artist_desc: 'Talking Heads because Talking Heads'
        },
        {name: 'John-Michael Crljen', pronouns: 'He/Him', role: 'Writer', image: '/team/John-Michael.png'},
        {
            name: 'Aidan Gabert',
            pronouns: 'He/Him',
            role: '1st AC',
            image: '/team/Aidan.png',
            fav_artist: 'Menehan Street Band, and/or The Budos Band',
            fav_artist_desc: ''
        },
        {
            name: 'Fj Tai',
            pronouns: 'She/Her',
            role: 'Camera Op',
            image: '/team/FJ.png',
            fav_artist: 'The Korean Boy Band EXO',
            fav_artist_desc: 'They’ve been one of my first Korean boy bands I listen to and I just love their music. I love listening to their music before a competition or while I am doing homework. They do Chinese covers of their songs.'
        },
        {name: 'Lucas Minardi', pronouns: 'He/Him', role: 'Grip', image: '/team/Lucas.png'},
        {name: 'Elise Stroud', pronouns: 'She/Her', role: 'Art Director', image: '/team/Elise.png'},
        {name: 'Abby Mitchell', pronouns: 'She/They', role: 'Makeup', image: '/team/Abby.png'},
        {
            name: 'Ben Lilley',
            pronouns: 'He/Him',
            role: 'Assistant Editor',
            image: '/team/Ben.png',
            fav_artist: 'Borderline Fever',
            fav_artist_desc: 'I actually cant think of a good answer you can put Borderline Fever.'
        },
        {
            name: 'Alistair Grey',
            pronouns: 'He/Him',
            role: 'Sound Editor',
            image: '/team/Alistair.png',
            fav_artist: 'Bear McReary',
            fav_artist_desc: 'He’s been a part of many musical scores that have an impact of the media I consume. His music still make me feel connected to the characters even with the songs on their own.'
        },
        {
            name: 'Milo Galley',
            pronouns: 'Any',
            role: 'Art Department',
            image: '/team/Milo.png',
            fav_artist: '',
            fav_artist_desc: 'I like too many musicians to pick a favourite, music is too complex to say one is better than all others'
        },
        {
            name: 'Kaden Scott',
            pronouns: 'He/Him',
            role: 'Web Design',
            image: '/team/Kaden.png',
            fav_artist: 'Watsky',
            fav_artist_desc: 'My favourite artist is Watsky, having followed him from his Epic Rap Battle days, to releasing multiple groundbreaking albums that are constantly on repeat 🎵 Watching his sound develop over years of projects has been super cool and inspiring (￣▽￣)/♫•*¨*•.¸¸♪'
        }
    ];
    let index: number = 0

    const next = () => index = Math.min(index + 1, crew.length - 1)
    const prev = () => index = Math.max(index - 1, 0);
</script>

<article>
    <nav class="tv-control">
        <button on:click={prev}>◀</button>
        <h1>{crew[index].name}</h1>
        <button on:click={next}>▶</button>
    </nav>
    <section class="crew-info">
        <img src="{crew[index].image}"/>
        <div class="crew-info-text">
            <h1>{crew[index].name}</h1>
            <p>Favourite Artist: <b>{crew[index].fav_artist}</b></p>
            <p>{crew[index].fav_artist_desc}</p>
        </div>
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

    .tv-control {
        display: flex;
        flex-direction: row;
    }

    .crew-info {
        background-color: rgba(255, 255, 255, 0.53);
        z-index: -1;

        /*display: flex;*/
        /*flex-direction: row;*/
        padding-top: 1rem;
        padding-left: 1rem;
        padding-bottom: 3rem;
    }

    .crew-info img {
        width: 100%;
        height: 100%;
        background-color: black;
        object-fit: contain;
    }

    .crew-info .crew-info-text {
        margin-right: 3rem;
        /*display: flex;*/
        /*flex-direction: column;*/
        /*justify-content: flex-end;*/
    }

    .image-container > nav button {
        max-width: 1.75rem;
        text-align: center;
        width: 100%;
    }
</style>