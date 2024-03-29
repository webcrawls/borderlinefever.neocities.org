<script lang="ts">
    import {writable, type Writable} from "svelte/store";
    import {setContext} from "svelte";
    import {page} from "$app/stores";

    const hasAnchor: boolean = $page.url.hash !== ""
    const ready: Writable<boolean> = writable(hasAnchor)
    const loadingProgress: Writable<number> = writable(0.0)
    const playing: Writable<boolean> = writable(false)

    setContext("playing", playing)
    setContext("ready", ready)
    setContext("loadingProgress", loadingProgress)
</script>

<!--<img src="/logo/logo-grayscale.png"/>-->

<style>
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding-right: 2rem
    }
</style>

<!--<style>-->
<!--    blockquote {-->
<!--        border-left: 2px solid white;-->
<!--        margin-inline: 1rem;-->
<!--        margin-block: 1rem;-->
<!--        padding-left: 1rem;-->
<!--        padding-block: 0.2rem;-->
<!--        background-color: rgba(255, 255, 255, 0.3);-->
<!--    }-->

<!--    p {-->
<!--        text-indent: 4rem;-->
<!--        font-size: 16px;-->
<!--        margin-block: 1rem;-->
<!--    }-->
<!--</style>-->