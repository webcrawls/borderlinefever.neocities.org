<script lang="ts">
	export let closed: boolean = false;
</script>

<section class="notification" class:closed>
	<div class="notification-outer">
		<div class="notification-inner">
			<slot />
		</div>
		<button on:click={() => closed = true}>x</button>
	</div>
</section>

<style>
    .notification {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        color: white;
        position: absolute;
        top: 0;
        left: 0;

        background-color: #d37373;

        height: 3rem;
        transition: height 0.5s ease-in-out;
    }

		.notification-outer {
        border-block: 2px solid #ffc8c8;
        display: flex;
				justify-content: center;
				align-items: center;
        width: 100%;
				height: 100%;
		}

    .notification.closed {
        height: 0;
    }

    .notification-inner {
        padding-block: 0.5rem;
    }
</style>