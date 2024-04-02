<script lang="ts">
    import {getContext, onDestroy, onMount} from "svelte";
    import TeamWidgetControl from "$lib/team-widget/TeamWidgetControl.svelte";
    import {browser} from "$app/environment";

    const crew = [
        {name: 'Darius', pronouns: 'He/Him', role: 'Actor', image: '/team/Darius.png', fav_artist: 'MGMT'},
        {
            name: 'Tyler Eliott',
            pronouns: 'They/Them',
            role: 'Director',
            image: '/team/Tyler 2.png',
            fav_artist: "Her's",
            fav_artist_desc: " I think they have a very whole sound and such a fun energy. The connection the two members have with each other is something that really resonates with me and radiates throughout their work."
        },
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
        {name: 'John-Michael Crljen', pronouns: 'He/Him', role: 'Writer'},
        {
            name: 'Aidan Gabert',
            pronouns: 'He/Him',
            role: '1st AC',
            image: '/team/Aidan.jpg',
            fav_artist: 'Menehan Street Band, and/or The Budos Band',
        },
        {
            name: 'Fj Tai',
            pronouns: 'She/Her',
            role: 'Camera Op',
            image: '/team/FJ.png',
            fav_artist: 'The Korean Boy Band EXO',
            fav_artist_desc: 'They’ve been one of my first Korean boy bands I listen to and I just love their music. I love listening to their music before a competition or while I am doing homework. They do Chinese covers of their songs.'
        },
        {name: 'Lucas Minardi', pronouns: 'He/Him', role: 'Grip'},
        {
            name: 'Elise Stroud',
            pronouns: 'She/Her',
            role: 'Art Director',
            image: '/team/Elise.jpg',
            fav_artist: "Waterparks"
        },
        {
            name: 'Abby Mitchell',
            pronouns: 'She/They',
            role: 'Makeup',
            image: '/team/Abby.png',
            fav_artist: "Sleep Token"
        },
        {
            name: 'Ben Lilley',
            pronouns: 'He/Him',
            role: 'Assistant Editor',
            image: '/team/Ben.png',
            fav_artist: 'Borderline Fever',
            fav_artist_desc: 'I actually cant think of a good answer you can put Borderline Fever.'
        },
        {
            name: 'Alastair Grey',
            pronouns: 'He/Him',
            role: 'Post Sound Mixer',
            image: '/team/Alastair.jpg',
            fav_artist: 'Bear McReary',
            fav_artist_desc: 'He’s been a part of many musical scores that have an impact of the media I consume. His music still make me feel connected to the characters even with the songs on their own.'
        },
        {
            name: 'Milo Galley',
            pronouns: 'Any',
            role: 'Art Department',
            image: '/team/Milo.png',
            fav_artist: 'Borderline Fever',
            fav_artist_desc: 'I like too many musicians to pick a favourite, music is too complex to say one is better than all others'
        },
        {
            name: 'Kaden Scott',
            pronouns: 'He/Him',
            role: 'Web Designer',
            image: '/team/Kaden.png',
            fav_artist: 'Watsky',
            fav_artist_desc: 'My favourite artist is Watsky, having followed him from his Epic Rap Battle days, to releasing multiple groundbreaking albums that are constantly on repeat 🎵 Watching his sound develop over years of projects has been super cool and inspiring (￣▽￣)/♫•*¨*•.¸¸♪'
        },
        {
            name: 'Veda Menghani',
            pronouns: 'She/Her',
            role: 'Grip',
            fav_artist: 'Borderline Fever',
            image: '/team/Veda.jpg'
        },
        {
            name: 'Cameron Jaigobin',
            pronouns: 'He/Him',
            role: 'Transmedia',
            fav_artist: 'The Flaming Lips',
            image: '/team/Cameron.webp'
        },
        {
            name: 'Alan Haw',
            pronouns: 'He/Him',
            role: 'Gaffer',
            fav_artist: 'Borderline Fever',
            image: '/team/Alan.png'
        },
        {
            name: "Chiara Ruggiero",
            pronouns: "She/Her",
            role: "Production Assistant",
            fav_artist: "Borderline Fever",
            image: '/team/Chiara.png'
        }
    ];
    let index: number = 0

    const control = getContext("control")
    const currentTeam = getContext("currentTeam")

    $: $currentTeam = crew[index]

    const next = () => index = Math.min(index + 1, crew.length - 1)
    const prev = () => index = Math.max(index - 1, 0)

    onMount(() => {
        $control = TeamWidgetControl
        if (browser) {
            window.addEventListener("team:previous", prev)
            window.addEventListener("team:next", next)
        }
    })

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("team:previous", prev)
            window.removeEventListener("team:next", next)
        }
    })
</script>

<article>
    <section class="crew-info">
        <img class="crew-image" src="{crew[index].image ?? '/static-crt.gif'}"/>
        <p class="crew-role"
           class:offset={index % 2 === 0}><b>{crew[index].role}</b></p>
        {#if crew[index].fav_artist}
            <p class="crew-artist"
               class:offset={index % 2 === 0}>Favourite Artist: <b>{crew[index].fav_artist}</b></p>
        {/if}
        {#if crew[index].fav_artist_desc}
            <p class="crew-artist-text">{crew[index].fav_artist_desc}</p>
        {/if}
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

    .crew-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .crew-role {
        position: absolute;
        background-color: white;
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        top: -16px;
        left: -16px;
    }

    .crew-role.offset {
        left: unset;
        top: -16px;
        right: 0px;
    }

    .crew-artist {
        position: absolute;
        background-color: white;
        color: black;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
        border-radius: 2px;
        font-size: 20px;
        bottom: -16px;
        right: 0px;
    }

    .crew-artist.offset {
        right: unset;
        bottom: -16px;
        left: -16px;
    }

    .tv-control {
        display: flex;
        flex-direction: row;
    }

    .crew-info {
        z-index: -1;
        width: 100%;
        height: 100%;
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