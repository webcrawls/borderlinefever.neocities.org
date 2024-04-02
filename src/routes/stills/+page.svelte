<script lang="ts">
    import {getContext, onMount} from "svelte";

    const control = getContext("control")

    onMount(() => {
        $control = null
    })
</script>