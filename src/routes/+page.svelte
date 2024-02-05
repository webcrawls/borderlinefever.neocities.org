<script lang="ts">
    import TeamCard from "$lib/TeamCard.svelte";

    let on: boolean = true

    const enter = () => {
        on = true
    }
</script>

<main>
    <section class="entrance" class:on={on} class:off={!on}>
        <div class="section-1">
            <nav class="nav-left">
                <a class="big-link" href="#">ABOUT</a>
                <a class="big-link" href="#">SYNOPSIS</a>
            </nav>
        </div>
        <div class="section-2">
            <header>
                <h1 class="title">INTERFERENCE PATTERN</h1>
                <p class="subtitle">a Borderline Fever Production</p>
            </header>
            <a href="#" on:click={enter}>
                <img class="monitor" src="/monitor.png" usemap="#monitor"/>
            </a>
            <footer>
                <p>Two brothers decide to explore an old warehouse out of curiosity of what lies inside. They venture through a hole in the floor into the basement where they find themselves in over their heads in a surreal environment, with familiar faces lurking</p>
            </footer>
        </div>
        <div class="section-3">
            <nav class="nav-right">
                <a class="big-link" href="#">TEAM</a>
                <a class="big-link" href="#">EXTRAS</a>
            </nav>
        </div>
    </section>
    <section class="production">
        <h1 class="title">Production</h1>
        <p>meet the team!</p>
        <div class="team-list">
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
        </div>
    </section>
    <section class="stills">
        <h1 class="title">Stills</h1>
        <div class="still-list">
            <img src="https://placehold.co/512x512"/>
            <img src="https://placehold.co/512x512"/>
            <img src="https://placehold.co/512x512"/>
            <img src="https://placehold.co/512x512"/>
            <img src="https://placehold.co/512x512"/>
            <img src="https://placehold.co/512x512"/>
        </div>
    </section>
    <section class="socials">
        <h1 class="title">Find us on the Internet!</h1>
    </section>
</main>

<style>
    .team-list {
        display: flex;
        flex-direction: row;
        gap: 1rem;
    }
</style>