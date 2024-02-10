<script lang="ts">
    export let link: string = 'https://placehold.co/512x512'
    export let name: string = "Tyler"
    export let pronouns: string = "(they/them)"
    export let role: string = "Director"
</script>

<article>
    <img src="https://placehold.co/512x512" />
    <div class="name">
        <h1>{name}</h1>
        <p>{pronouns}</p>
    </div>
    <p>{role}</p>
</article>

<style>
    article {
        max-width: 12rem;
        width: 100%;
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