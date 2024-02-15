<script lang="ts">
    export let link: string = 'https://placehold.co/512x512'
    export let name: string = "Tyler"
    export let pronouns: string = "(they/them)"
    export let role: string = "Director"
    export let socials: { [key: string]: string } = {}
</script>

<article>
    <img src="https://placehold.co/512x512"/>
    <div class="text-container">
        <div class="name">
            <h1>{name}</h1>
            <p>{pronouns}</p>
        </div>
        <p style="font-style: italic">{role}</p>
        <div class="socials">
            {#each Object.entries(socials) as [link, text]}
                <a href="{link}">{text}</a>
            {/each}
        </div>
    </div>
</article>

<style>
    article {
        background-color: rgba(255, 255, 255, 0.75);
        flex-basis: 33%;
    }

    .socials {
        padding-top: 0.6rem;
    }

    .socials > a {
        display: block;
        border-left: 4px black solid;
        padding-left: 1rem;
    }

    * {
        color: black;
    }

    .text-container {
        padding: 0.5rem;
    }

    img {
        width: 100%;
    }

    .name {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
</style>