<script lang="ts">
	export let entries: { name: string }[] = [];
	export let changed: ((index: number) => void) | undefined = undefined;
	export let index: number = 0;

	const noop = () => true;

	$: noop(index) && changed && changed(index);

	const prev = () => {
		index -= 1;

		if (index < 0) {
			index = entries.length - 1;
		}
		console.log({ prev, index });
	};

	const next = () => {
		index += 1;

		if (index > entries.length - 1) {
			index = 0;
		}
		console.log({ next, index });
	};
</script>

<div class="team-widget">
	<button on:click={prev}>Previous</button>
		<select bind:value={index}>
			{#each entries as entry, index}
				<option value="{index}">{entry.name}</option>
			{/each}
		</select>
	<button on:click={next}>Next</button>
</div>

<style>
    .team-widget {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    button {
        color: transparent;
        width: 30px;
        aspect-ratio: 1 / 1;
        background-size: 100%;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    button:first-of-type {
        background-image: url("/button-left.png");
    }

    button:last-of-type {
        background-image: url("/button-right.png");
    }

    button:first-of-type:hover {
        background-image: url("/button-left-hover.png");
    }

    button:last-of-type:hover {
        background-image: url("/button-right-hover.png");
    }

    select {
        /*border: 2px solid rgba(255, 255, 255, 0.4);*/
        border: none;
        color: rgba(255, 255, 255, 0.6);
        background-color: unset;
        border-radius: 0;
        padding-inline: 0.25rem;
        padding-block: 0.4rem;
        text-align: center;
        cursor: pointer;
        width: 100%;
        text-overflow: ellipsis;
        position: relative;
				margin-inline: clamp(10px, 3vw, 1rem);
        font-size: clamp(12px, 3vw, 1rem);
    }

    select:hover {
        color: rgba(255, 255, 255, 0.95);
				background-color: #282828;
				border-radius: 3px;
    }

    select option {
        font-size: 1rem;
    }
</style>