<script lang="ts">
    export let link: string = 'https://placehold.co/512x512'
    export let name: string = "Tyler"
    export let pronouns: string = "(they/them)"
    export let role: string = "Director"
</script>

<article>
    <img src="https://placehold.co/512x512" />
    <h1>{name}</h1>
    <p>{pronouns}</p>
    <p>{role}</p>
</article>

<style>
    article {
        max-width: 9rem;
        width: 100%;
    }

    img {
        width: 100%;
    }
</style>