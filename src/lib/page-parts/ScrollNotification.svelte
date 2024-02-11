<script lang="ts">
    import {fade} from "svelte/transition";
    import {onDestroy, onMount} from "svelte";

    const animation = [
        [
            "vvv scroll! \xa0\xa0\xa0",
            "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vvv"
        ],
        [
            "\xa0\xa0\xa0 scroll! vvv",
            "vvv\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"
        ],
    ]

    const tickSpeed = 1000

    const tick = () => {
        currentFrame += 1
        if (currentFrame >= animation.length) {
            currentFrame = 0
        }
        timeoutId = setTimeout(tick, tickSpeed)
    }

    let currentFrame: number = 0
    let timeoutId: number = undefined

    onMount(() => {
        timeoutId = setTimeout(tick, tickSpeed)
    })

    onDestroy(() => {
        clearTimeout(timeoutId)
    })
</script>

<div transition:fade={{duration: 150}} class="scroll">
    <p>{animation[currentFrame][0]}</p>
    <p>{animation[currentFrame][1]}</p>
</div>

<style>
    p {
        font-size: 1.75rem;
    }
</style>